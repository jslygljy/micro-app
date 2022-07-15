/**
 * tooltip
 * @param params
 * @returns
 */
export const tooltip = (params: any) => {
    let text = "";
    if (Array.isArray(params)) {
        text = `<div style="margin-bottom: 7px; font-weight: bolder; color: rgba(18, 19, 20, 1);">${params[0].name}</div>`;
        params.forEach((item: any) => {
            text += `<div style="
          display: flex;
          align-items: center;
          margin-top: 6px;
          padding: 6px;
          border-radius: 4px;
          background: #ffffff;
        ">
            <p style="
              width: 8px;
              height: 8px;
              margin-right: 5px;
              border-radius: 4px;
              background: ${item.color};
            ">
            </p>
            <div style="
              flex: 1;
              display: flex;
              justify-content: space-between;
            ">
              <p style="
                font-weight: normal;
                color: #666666;
              ">
                ${item.seriesName}
              </p>
              <p style="
                margin-left: 30px;
                color: #121314;
                font-weight: bolder;
              ">
                ${item.value}
              </p>
            </div>
          </div>`;
        });
    } else {
        text = `<div style="font-weight: bolder; color: rgba(18, 19, 20, 1);">
        <p style="">${params.name}</p>
        <div style="
        display: flex;
        align-items: center;
        margin-top: 6px;
        padding: 6px;
        border-radius: 4px;
        background: #ffffff;
      ">
          <p style="
            width: 8px;
            height: 8px;
            margin-right: 5px;
            border-radius: 4px;
            background: ${params.color};
          ">
          </p>
          <div style="
            flex: 1;
            display: flex;
            justify-content: space-between;
          ">
            <p style="
              font-weight: normal;
              color: #666666;
            ">
              数值
            </p>
            <p style="
              margin-left: 30px;
              color: #121314;
              font-weight: bolder;
            ">
              ${params.value}
            </p>
          </div>
        </div>
      </div>

      <div style="font-weight: bolder; color: rgba(18, 19, 20, 1);">
        <div style="
          display: flex;
          align-items: center;
          margin-top: 6px;
          padding: 6px;
          border-radius: 4px;
          background: #ffffff;
        ">
            <p style="
              width: 8px;
              height: 8px;
              margin-right: 5px;
              border-radius: 4px;
              background: ${params.color};
            ">
            </p>
            <div style="
              flex: 1;
              display: flex;
              justify-content: space-between;
            ">
              <p style="
                font-weight: normal;
                color: #666666;
              ">
                ${params.seriesName}
              </p>
              <p style="
                margin-left: 30px;
                color: #121314;
                font-weight: bolder;
              ">
                ${params.percent}%
              </p>
            </div>
          </div>
        </div>`;
    }
    return `<div style="
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(4px);
      filter: blur(4px);
      border-radius: 3px;
      z-index: 0;
    "></div>
    <div style="
      position: relative;
      z-index: 9;
    ">${text}</div>`;
};
