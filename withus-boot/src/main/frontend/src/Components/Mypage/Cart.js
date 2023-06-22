import styles from "../../Css/Cart.module.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from '../Modal/Modals.js';

function Cart() {
  const [list , SetList] = useState([]);

  useEffect(()=> {
    axios.get('/cart/' + sessionStorage.getItem("id")).then((res)=>{
      SetList(res.data)
      console.log(res)
    })
    .catch(error => console.log(error))
  },[])   
  
  
    const [count, setCount] = useState(0);

    const userId = sessionStorage.getItem("id");

      //주문 상품 배열
      const [orderList, setOrderList] = useState([]);
      //여러 상품 주문시, 맨 처음 상품 id
      const [groupId, setGroupId] = useState();

      const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    /*유효성 검사*/
    const [checkName, setCheckName] = useState(" ");
    const [checkEmail, setCheckEmail] = useState(" ");
    const [checkPhone, setCheckPhone] = useState(" ");
  
    const updateName = e => {

        if(e.target.value === "")
            setCheckName("이름을 입력해주세요");
        else{
            setCheckName("");
            setName(e.target.value);
        }
    }
    const updateEmail = e => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if(e.target.value === "")
            setCheckEmail("이메일을 입력해주세요");
        
        else if(regExp.test(e.target.value) === false)
            setCheckEmail("이메일 양식을 확인해주세요");

        else{    
            setCheckEmail("");
            setEmail(e.target.value);
        }
    }
    const updatePhone = e => {
        var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/

        if(e.target.value === "")
            setCheckPhone("전화번호를 입력해주세요");

        else if(regExp.test(e.target.value) === false)
            setCheckPhone("전화번호 양식은 숫자만 8자리 입력입니다.");

        else{
            setCheckPhone("");
            setPhone(e.target.value);
        }
    }
    
    /*주문하기 버튼 클릭시*/
    function orderBtn_click() {
        /*백엔드로 값 전달*/
        if(
            checkName === "" && checkEmail === "" && checkPhone === ""  ){
            axios( 
                {
                url: '/cart/order',
                method: 'post',
                data: {
                 data1: totalPrice, data2:count, data3:groupId, data4:userId, data5:orderList.length
                } , 
                baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
            });


            orderList.map((function(a,i){
              axios( 
                {
                url: '/cart/delete/'+a,
                method: 'get',
                baseURL: 'http://localhost:8080',
                //withCredentials: true,
                }
            ).then(function (response) {
                console.log(response.data);
            });
  
            }
            ))
           

            alert("결제가 완료되었습니다!");

        }

        else{
            alert("주문 입력폼을 확인해주세요");
        }
    }

  console.log(list);

  const [checkedItems, setCheckedItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);




  const handleSingleCheck = (checked, id, cartId, quantity, groupId) => {
   
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckedItems(prev => [...prev, id]);
      let price = totalPrice;
      price = price+id;
      setTotalPrice(price);
      setGroupId(groupId);

      setOrderList(prev => [...prev, cartId]);
      console.log("장바구니 id:"+orderList);
      let c = count;
      c = c+quantity;
      setCount(c);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckedItems(checkedItems.filter((el) => el !== id));
      let price = totalPrice;
      if(price === 0) return;
      price = price-id;
      setTotalPrice(price);
    }
   
  };

  //주문하기 모달창
  const [modalOpen1, setModalOpen1] = useState(false);
  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };
  

  const handleAllCheck = (checked) => {
    if(checked){
      const checkedItemsArray = [];
      list.forEach(list => checkedItemsArray.push(list.groupItem_price) )
      setCheckedItems(checkedItemsArray)

    }else{
      setCheckedItems([]);
    }
  };


  return (
    <>
    
     
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
          <div></div>
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>
      {list.length ===0 ? (
        <div className={"style.not"}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 구호물품을 장바구니에 담아보세요!</p>
        </div>
      ) :
      (
          list.map(function(a,i){
             let quantity = list[i].quantity;
              const handleQuantity = (type) => {
                if(type === "plus"){
                  quantity=quantity+1;
                  console.log(quantity);
                    const list2 = Array.from(list);
                    list2[i].quantity = quantity;
                    SetList(list2);
  
                    console.log(quantity);
                }else{
                  if(quantity === 1) return;
                  quantity=quantity-1;
                   console.log(quantity);
                  const list3 = Array.from(list);
                  list3[i].quantity = quantity;
                  SetList(list3);
                }

               
              }
             

            return(
              
      <section className={styles.cart_product_list}>
        <input type="checkbox"
        onChange={(e) => handleSingleCheck(e.target.checked, list[i].groupItem_price*quantity, list[i].cart_id, quantity, list[i].groupItem_id)}
        checked={checkedItems.includes(list[i].groupItem_price*quantity) ? true:false}
        
         />
        <div className={styles.cart_product_wrap}>
          <div className={styles.cart_product_image}>
          <img className="groupItem_image" src={process.env.PUBLIC_URL + list[i].img}></img>
            {/* <img src={photos[list[i].groupItem_id-11]} alt="product-img" /> */}
          </div>
          
        
          <div className={styles.cart_product_info}>
            <p className={styles.product_name}>{list[i].groupItem_name}</p>
            <p className={styles.price}>{list[i].groupItem_price}</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
            </div>
        </div>

        <div className={styles.cart_product_count}>
          <img
            className={styles.minus}
            src="/icon-minus-line.svg"
            alt="minus"
            onClick={() => handleQuantity("minus")}
          />

          <div className={styles.count}>
            <span>{quantity}</span>
          </div>
          <img
            className={styles.plus}
            src="/icon-plus-line.svg"
            alt="plus"
            onClick={() => handleQuantity("plus")}
          />
        </div>

        

        <div className={styles.product_remove}>
          <img src="/icon-delete.svg" alt="delete" />
        </div>
      </section>
      )
            })
          
      ) }
      <div className={styles.total}>
        <div className={styles.total_price}>
        </div>
        <div className={styles.pay_minus}>
       
        </div>
        <div className={styles.sale}>
        </div>
      
        <div className={styles.payment}>
          <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
          <p className={styles.cart_prouct_payment_price}>{totalPrice}</p>
        </div>
     
        <div className={styles.cart_product_price}>
          <p className={styles.total_price}></p>
          <button className={styles.btn_submit}  onClick={openModal1}>주문하기</button>
              <Modal open={modalOpen1} close={closeModal1} header="주문자 정보">
              <div>
        <form id="order_form">
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">이름</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="이름을 입력해주세요"
                        onChange={updateName}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkName}</div>
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">이메일</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="이메일을 입력해주세요"
                        onChange={updateEmail}></input>
                    </div>
                </div>
            </div>
            <div class="inputCheck">{checkEmail}</div>
            <div class="order_content">
                <div class="order_content1">
                    <div class="order_name">전화번호</div>
                </div>
                <div class="order_content2">
                    <div class="order_inputBox">
                        <input class="order_input" placeholder="숫자만 입력해주세요"
                        onChange={updatePhone}></input>
                    </div>
                </div>
            </div>
            <div class="order_content">
                <div className="order-count-content">총 수량</div> 
                <div className="order-count">{count}개</div>
                <div className="order-price-content">상품 총 금액</div> 
                <div className="order-price">{totalPrice}</div>
                <div className="order-price-content2">원</div>
            </div>
            <div class="inputCheck">{checkPhone}</div>                     
            <div id="order_bottom">
                <button id="along_order_btn" type="submit" 
                onClick={() => orderBtn_click()}
                >결제하기</button>
            </div>
        </form>
    </div>
              </Modal>

       
      </div>
      </div>
    </>
  );
};

export default Cart;