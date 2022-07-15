function emptyAction(state: any) {
  console.warn(`Current execute action is empty!${state}`);
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    globModule: {
      actions: {
        getGlobalState: () => {},
      },
    },
  };

  /**
   * 设置 actions
   */
  setActions(actions: any) {
    this.actions = Object.assign({}, actions);
  }

  /**
   * 在 globalState 发生改变时触发
   */
  onGlobalStateChange(state: any) {
    return this.actions.onGlobalStateChange(state);
  }

  /**
   * 设置新的值
   */
  setGlobalState(state: any) {
    return this.actions.setGlobalState(state);
  }
  getGlobalState() {
    return this.actions.globModule.actions.getGlobalState();
  }
}

const actions = new Actions();
export default actions;
