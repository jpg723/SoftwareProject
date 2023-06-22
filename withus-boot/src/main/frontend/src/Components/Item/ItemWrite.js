import '../../Css/ItemWrite.css';
import React, {useState} from "react";
import axios from 'axios';

function ItemWrite() {
    const [item_title, setItem_title] = useState("");
    const [item_image, setItem_image] = useState();
    const [item_content, setItem_content] = useState("");
    const [checkItem_title, setCheckItem_title] = useState(" ");
    const [checkItem_image, setCheckItem_image] = useState(" ");
    const [checkItem_content, setCheckItem_content] = useState(" ");
    const userId = sessionStorage.getItem("id");

    //선택한 카테고리
    const [category, setCategory] = useState(1);
    const handleSelect = (e) => {
        setCategory(e.target.value);
        console.log(e.target.value);
      };

    const updateTitle = e => {
        if(e.target.value === "")
            setCheckItem_title("제목을 입력해주세요");
        else{
            setCheckItem_title("");
            setItem_title(e.target.value);
        }
    }
    const updateImage = e => {
        if(e.target.value === "")
            setCheckItem_image("이미지를 업로드해주세요");
        else{
            setCheckItem_image();
            let files = e.target.files;
        let reader = new FileReader();
        console.log(files[0]);
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
            //const previewImgUrl = reader.result;
        setItem_image(reader.result);
         
        };     
        }
    }

    const updateContent = e => {
        if(e.target.value === "")
            setCheckItem_content("내용을 작성해주세요");
        else{
            setCheckItem_content("");
            setItem_content(e.target.value);
        }
    }

    /*가버튼 클릭시*/
    function itemRegister_btn_click() {
        /*백엔드로 값 전달*/
        if(sessionStorage.getItem("id")===null) {
                     alert("로그인을 먼저 해주세요!")
        }
        else{ 
                     
            axios(
                {
                url: '/item/register',
                method: 'post',
                data: {
                    data1:item_title, data2:item_image, data3: item_content, data4: userId, data5: category
                } , 
                //baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
            });

            alert("등록완료");

        }       

            document.location.href = "/item";

    }


  return (
    <div>
        <div id="item-register-header">
            <div id="item-register-title">나눔 글쓰기</div>
            <div id="item-register-line"></div>
        </div>
        <div id="item-register-main">
            <div id="item-register-main-content">
                <div id="item-category-select-box">
                    <select id="item-category-select" onChange={handleSelect}>
                        <option key="item1" value="1">식품</option>
                        <option key="item2" value="2">의류</option>
                        <option key="item3" value="3">침구류</option>
                        <option key="item4" value="4">생활용품</option>
                        <option key="item5" value="5">가전제품</option>
                        <option key="item6" value="6">미용</option>
                    </select>
                </div>
            </div>
            <div className="item-register-main-write">
                <div>
                    <input type='text' id="title_txt" name="item_title" placeholder="제목을 입력하세요" onChange={updateTitle}></input>
                </div>
                <div>
                    <input type="file" id="item_image_upload" name="item_iamge" accept='image/*' 
                    onChange={updateImage}></input>
                </div>
                <img src={item_image} name="viewimg" id="previewimg" alt="" style={{width:"200px", height:"200px", border:"1px solid black"}}/>
                <div>
                    <textarea id="content_txt" name="item_content" placeholder="내용을 입력하세요." onChange={updateContent}></textarea>
                </div>
                <div class="board_inputCheck">{checkItem_title}</div>
                <div class="board_inputCheck">{checkItem_content}</div>
                <div id="post_submit">                    
                    <button id="itemregister_btn" type="submit"  onClick={() => itemRegister_btn_click()}>나눔 등록</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemWrite;