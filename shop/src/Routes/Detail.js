import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import '../App.css'



function TabContent(props){
    let [fade, setFade] = useState('')
    useEffect(() => {
        setTimeout(() => {setFade('end')}, 100)
        return () => {
            setFade('')
        }
    },[props.탭])
    return (
        <div className={"start "+fade}>
            {[<div>내용 0</div>,<div>내용 1</div>,<div>내용 2</div>][props.탭]}
        </div>
    )
    
}

function Detail (props) {

    let {id} = useParams();
    let myItem = props.shoes.find((x)=> x.id==id);


    let [탭, 탭변경] = useState(0)
    let [fade2, setFade2] = useState()

    useEffect(() => {
        setTimeout(() => {setFade2('end')}, 100)
        return () => {
            setFade2('')
        }
    },[])


    return (
        <div className={'container start ' + fade2}>
            <div className="row">
                <div className="col-md-6">
                <img src={`/shoe${id}.png`} width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                {/* <div>
                    <Box>
                        <YellowBtn bg='orange' onClick={() => {setCount(count+1)}}>오렌지 버튼</YellowBtn>
                        <YellowBtn bg='blue'>파란 버튼</YellowBtn>
                        {alert == true ? <YellowBtn>2초후에 사라짐</YellowBtn> : null}
                    </Box>
                </div> */}
                <div>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent 탭={탭}/>
                </div>
            </div>
        </div>
    )
}

export default Detail;