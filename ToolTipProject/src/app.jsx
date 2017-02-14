
class Tooltip extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={opacity:false}
        this.invokeToggle=this.toggle.bind(this)
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
        onMouseEnter={this.invokeToggle}
        onMouseOut={this.invokeToggle}>
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
    is promoted in Saylani.
    </div>,
    <div>
    <Tooltip text="React up and running is nice book for novice users" >React Up and Running </Tooltip>
    is promoted in Saylani,Its awsome!
    </div>,
    <div>
    <Tooltip text="React is component based architecture introduce by FACEBOOK" >React Quickly </Tooltip>
    is promoted in Saylani.
    </div>,
    <div>
    <Tooltip text="React up and running is nice book for novice users" >React Up and Running </Tooltip>
    is promoted in Saylani,Its awsome!
    </div>
    </div>,
    document.getElementById('tooltip')
)





