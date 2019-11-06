import React,{Component} from 'react';
class TOC extends Component {
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id} data-id = {data[i].id} onClick={function(e){
                this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}>
            {/* <li key={data[i].id} onClick={function(id,e){
                this.props.onChangePage(id);
            }.bind(this,data[i].id)} bind에 두번쨰 인자를 주면 그 인자가 function안의 첫번째 인자로 들어간다
            bind읭 뒤에서부터 function의 앞으로 들어간다. */}
                {data[i].title}
                </li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}
export default TOC;