
class Tooltip extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={opacity:false}
        this.toggle=this.toggle.bind(this)
    }

    toggle()
    {
        const tipNode=ReactDOM.findDOMNode(this)
        this.setState
        ({
            opacity:!this.state.opacity,
            top:tipNode.offsetTop,
            left:tipNode.offsetLeft

        })
    }

    render()
    {
        const style ={
            zIndex:(this.state.opacity)?100:-1000,
            opacity: +this.state.opacity,
            top:(this.state.top || 0)+20,
            left:(this.state.left||0)-30
        }

        return <div style={{display:'inline'}}>
        <span style={{color:'red'}}
        onMouseEnter={this.toggle}
        onMouseOut={this.toggle}>
        {this.props.children}
        </span>
        
        <div className="tooltip bottom" style={style} role="tooltip">
        <div className="tooltip-arrow"></div>
        
        <div className="tooltip-inner">
        {this.props.text} 
        </div>
        
        </div>        

        </div>        
    }
}



ReactDOM.render(

    <div>
    <div>
    <Tooltip text="React is component based architecture introduce by FACEBOOK" >React Quickly </Tooltip>
    was published in 2018,Its awsome!
    </div>,
    <div>
    <Tooltip text="React is component based architecture introduce by FACEBOOK" >React Up and Running </Tooltip>
    was published in 2018,Its awsome!
    </div>
    </div>,
    document.getElementById('tooltip')
)





