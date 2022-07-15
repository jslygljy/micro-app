export default {
    name: "modal-drag",
    mounted(el: HTMLElement) {
        if (el.parentElement?.parentElement?.querySelector(".ant-modal-header")) {
            const MODAL_ELEMENT: HTMLElement | null = el.parentElement.parentElement.parentElement;
            const DRAG_ELEMENT: HTMLElement | null = el.parentElement.parentElement.querySelector(".ant-modal-header");
            if (!DRAG_ELEMENT || !MODAL_ELEMENT) return;
            // 模态框高度大于窗口高度时，不可拖拽
            if (MODAL_ELEMENT.clientHeight > document.body.clientHeight) return;

            let DRAG = false;
            let CLICK_X = 0;
            let CLICK_Y = 0;
            let MOVE_X = 0;
            let MOVE_Y = 0;
            let BOUND_X = 0;
            let BOUND_Y = 0;
            let SAVE_X = 0;
            let SAVE_Y = 0;
            MODAL_ELEMENT.style.position = "fixed";
            MODAL_ELEMENT.style.top = "100px";
            MODAL_ELEMENT.style.left = "50%";
            MODAL_ELEMENT.style.marginLeft = `-${MODAL_ELEMENT.clientWidth / 2}px`;
            (DRAG_ELEMENT as HTMLElement).style.cursor = "move";
            (DRAG_ELEMENT as HTMLElement).style.userSelect = "none";

            /**
             * 监听鼠标按下事件
             */
            DRAG_ELEMENT.addEventListener("mousedown", (e: any) => {
                DRAG = true;
                const EVENT = e ?? window.event;
                CLICK_X = EVENT.clientX - DRAG_ELEMENT.offsetLeft;
                CLICK_Y = EVENT.clientY - DRAG_ELEMENT.offsetTop;

                // 监听鼠标移动事件
                document.body.addEventListener("mousemove", mousemove, false);
                // 监听鼠标抬起事件
                document.addEventListener("mouseup", mouseup, false);
            });

            /**
             * 监听鼠标移动事件
             * @param e
             * @returns
             */
            const mousemove = (e: any) => {
                if (!DRAG) return;
                // 获取鼠标移动的距离
                MOVE_X = e.clientX - CLICK_X;
                MOVE_Y = e.clientY - CLICK_Y;

                // 获取窗口触发边界的距离
                BOUND_X = (document.body.clientWidth - MODAL_ELEMENT.clientWidth) / 2;
                BOUND_Y = document.body.clientHeight - MODAL_ELEMENT.clientHeight - 100 + 24;

                // 设置默认位置
                MODAL_ELEMENT.style.left = `calc(50% + ${MOVE_X + SAVE_X}px)`;
                MODAL_ELEMENT.style.top = `calc(100px + ${MOVE_Y + SAVE_Y}px)`;

                // 设置右边界位置
                MOVE_X + SAVE_X > BOUND_X && (MODAL_ELEMENT.style.left = `calc(50% + ${BOUND_X}px)`);
                // 设置左边界位置
                MOVE_X + SAVE_X < -BOUND_X && (MODAL_ELEMENT.style.left = `calc(50% + ${-BOUND_X}px)`);
                // 设置下边界位置
                MOVE_Y + SAVE_Y > BOUND_Y && (MODAL_ELEMENT.style.top = `calc(100px + ${BOUND_Y}px)`);
                // 设置上边界位置
                SAVE_Y + MOVE_Y < -100 && (MODAL_ELEMENT.style.top = `0px`);
            };

            /**
             * 监听鼠标抬起事件
             */
            const mouseup = () => {
                // 拖动状态
                DRAG = false;

                // 保存默认位置
                SAVE_X += MOVE_X;
                SAVE_Y += MOVE_Y;

                // 保存边界位置
                SAVE_X > BOUND_X && (SAVE_X = BOUND_X);
                SAVE_X < -BOUND_X && (SAVE_X = -BOUND_X);
                MOVE_Y + SAVE_Y > BOUND_Y && (SAVE_Y = BOUND_Y);
                MOVE_Y + SAVE_Y < -100 && (SAVE_Y = -100);
            };
        }
    },
};
