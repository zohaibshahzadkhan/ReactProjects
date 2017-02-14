class Menu extends React.Component
{
    render()
    {
        let menuItem=['Home','AboutUs','Contact','Services','Blogs','SignIn','SignUp'];
        return <div>
                    {
                        menuItem.map((value,increment)=>
                        {
                            return <section id="menusection" key={increment}><MenuLinks  label={value}/></section>
                        }
                        
                        
                     )}
               </div>
    }
}



class MenuLinks extends React.Component
{
    render()
    {
        let labelValue=this.props.label.toLowerCase();
        let url='/'+labelValue.trim().replace(' ','-')
        return <span>
                <a id="list-item" href={url}>{this.props.label}</a>
                
               </span>
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('navbar')
)