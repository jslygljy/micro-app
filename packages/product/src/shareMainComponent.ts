let shareMainComponent: Record<string, any> = {};

// 获取共享的组件
export const getShareMainComponent = () => {
  return shareMainComponent;
};

// 设置共享的组件
export const setShareMainComponent = (
  currShareMainComponent: Record<string, any>
) => {
  for (const key in currShareMainComponent) {
    if (Object.prototype.hasOwnProperty.call(currShareMainComponent, key)) {
      shareMainComponent[key] = currShareMainComponent[key];
    }
  }
};
