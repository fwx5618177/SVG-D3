import React, { useCallback, useRef, useState } from 'react';
import './Drawing.css';
import { StyleStand } from './interface';

const Drawing = (props: any) => {
    const points: string[] = ['e', 'w', 's', 'n', 'ne', 'nw', 'se', 'sw'];

    const bgStyle = {
        left: props?.left,
        top: props?.top,
        width: props?.width,
        height: props?.height,
    }

    const isDown = useRef(false);
    const direction = useRef({});

    const [squareStyle, setSquareStyle] = useState<StyleStand>({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
    })

    const [dirVal, setDirVal] = useState<any>({
        'e': 0, 'w': 0, 's': 0, 'n': 0, 'ne': 0, 'nw': 0, 'se': 0, 'sw': 0 
    })

    const oriPos = useRef({
        top: 0,
        left: 0,
        cX: 0,
        cY: 0
    })

    const onMouseDown = useCallback((direct: string, e: any) => {
        e.stopPropagation();
        
        isDown.current = true;
        direction.current = direct;

        const cX = e.clientX;
        const cY = e.clientY;

        oriPos.current = {
            ...squareStyle,
            cX,
            cY
        }
        
        setDirVal({direct: {
            cX,
            cY
        }})
    }, [])

    const onMouseMove = useCallback((e: any) => {
        if (!isDown.current) return
        
        let newStyle = transform(direction.current, oriPos, e);
  
        setSquareStyle(newStyle);
    }, [])

    const onMouseUp = useCallback((event: any) => {
        isDown.current = false;
    }, [])

    const transform = (direction: any, oriPos: any, e: any) => {
        const style = {...oriPos.current};
        const offsetX = e.clientX - oriPos.current.cX;
        const offsetY = e.clientY - oriPos.current.cY;

        console.log('e:', e);
        
        switch(direction) {
            // 拖拽移动
            case 'move' :
                // 元素当前位置 + 偏移量
                const top = oriPos.current.top + offsetY;
                const left = oriPos.current.left + offsetX;
                // 限制必须在这个范围内移动 画板的高度-元素的高度
                style.top = Math.max(0, Math.min(top, bgStyle.height - style.height));
                style.left = Math.max(0, Math.min(left, bgStyle.width - style.width));
                break
            // 东
            case 'e':
                // 向右拖拽添加宽度
                style.width += offsetX;
                // e.target.
                return style
            // 西
            case 'w':
                // 增加宽度、位置同步左移
                style.width -= offsetX;
                style.left += offsetX;
                return style;
            case 's':
                style.height += offsetY;
                return style;
            // 北
            case 'n':
                style.height -= offsetY;
                style.top += offsetY;
                break;
            // 东北
            case 'ne':
                style.height -= offsetY;
                style.top += offsetY;
                style.width += offsetX;
                break;
            // 西北
            case 'nw':
                style.height -= offsetY;
                style.top += offsetY;
                style.width -= offsetX;
                style.left += offsetX; 
                break;
                    // 东南
            case 'se':
                style.height += offsetY;
                style.width += offsetX;
                break
            // 西南
            case 'sw':
                style.height += offsetY;
                style.width -= offsetX;
                style.left += offsetX;
                break;
        }

        return style;
    }

    return (
        <>
                <div className="drawing-item"  style={squareStyle}
                    onMouseUp={onMouseUp}
                    onMouseMove={(event: any) => onMouseMove(event)}
                    // @ts-ignore
                    onMouseDown={(event: any) => onMouseDown('move', event)}
                >
                    {points?.map(val => (
                        <div key={val} className={`control-point point-${val}`} 
                            // style={{
                            //     top: dirVal[val].cY,
                            //     left: dirVal[val].cX,
                            // }}
                            onMouseDown={e => onMouseDown(val, e)}>
                        </div>))}
                </div>
        </>
    )
}

export default Drawing;