import React from 'react'



export default function(props) {
    console.log(props)
  return (
    <div className="card">
      <div className="card__title">
        <span>{props.title}</span>
      </div>
      <div className="card__body">
        {/**每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容 */}
        {props.children}
      </div>
    </div>
  );
}
