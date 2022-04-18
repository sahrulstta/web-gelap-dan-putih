import styled from 'styled-components'


export const Conten = styled.div`

position: relative;
width: 100%;
display:flex;
justify-content: space-between;
align-items:center;
z-index:2;
`
export const Boxx = styled.div`
margin:50px;
position: relative;
max-width: 600px;
z-index:1;
margin-right:20px;


span{
    color:#3eb3f3;
}

a{
    display: inline-block;
    margin-top: 20px;
    padding:8px 20px;
    background: linear-gradient(90deg, rgba(220,150,231,1) 0%, rgba(50,181,244,1) 100%);
    color:white;
    border-radius:40px;
    letter-spacing: 1px;
    text-decoration: none;
}
`
export const Imgbox =  styled.div`
margin-top:50px;
position: relative;
width:500px;
display: flex;
justify-content:center;
align-items: center;

/* :hover{
    
    position:absolute;
    width:350px;
    height: 350px;
    background: #01eca5;
    border-radius:50%;
} */

`
export const Image = styled.div`
position:relative;
z-index:1;
max-width:350px;
 
`

export const Sosmed = styled.ul`
position:absolute;
bottom:40px;
left:100px;
display:flex;
justify-content: center;
align-items: center;

li{
    list-style: none;
}

li a{
    display:inline-block;
    margin-right: 15px;
    width:50px;

}
`

