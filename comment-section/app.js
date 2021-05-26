const submit = document.querySelector(".comment-submit");
const commentList = document.querySelector(".comments");
const commentInput = document.querySelector(".comment-input");
const commentNew = document.querySelector(".comment-new")
const Delete = document.querySelector(".comment-delete")


// example of user that already login    
    const logUser = {
        name: "izdihaar ariiba",
        email: "izdihaarariiba10@gmail.com",
        img: "./img/pooja.jpg"
    }

    // activeUser(logUser)

    // function activeUser(user) {
    //     if(user) {
    //         return commentNew.innerHTML =  ` 
    //         <img src=${user.img} alt="" class="comment-avatar" >
    //         <div class="flex-1">
    //             <h3 class="comment-author"> ${user.name} </h3>
    //             <form action="#" class="comment-form">
    //                 <textarea class="comment-input" placeholder="Add a comment" cols="30" rows="6"></textarea>
    //                 <input type="submit" class="comment-submit" value="reply" />
    //                 <button type="button" class="comment-delete"> Delete Comments </button>
    //             </form>
    //         </div>
    //         `
    //     }
    // }


function appendComment(e) {
    e.preventDefault()

    // define data for new comment
     const data = {
         avatar: "./img/github.png",
         comments: commentInput.value,
         author: ` ${ logUser ? logUser.name : undefined }  `
     }

    // prevent an input section from empty
     if(commentInput.value === "") {
         alert("please input something")
         return;
     }
     
    //  append comment
     template(data)
     
     //  reset textarea value to empty string/value
     commentInput.value = "";
     
    // set data to the localStorage
         localStorage.setItem("commentList", commentList.innerHTML )

}

    
    function template(data) {
           return commentList.insertAdjacentHTML("beforeend", `
           <div class="comment flex items-start justify-start">
           <img class="comment-avatar" src=${data.avatar} alt="myPict" />
           <div class="flex-1">
               <h3 class="comment-author">${data.author}</h3>
               <div class="comment-body">
                   ${data.comments}
               </div>
           </div>
       </div>
           `)
    
    }
      
// when submit button clicked
submit.addEventListener("click", appendComment, false)

const saved = localStorage.getItem("commentList")

// saved data/comments to the localStorage
if(saved) {
    commentList.innerHTML = saved;
} else {
    console.log("nothing saved");
}

// remove all comments from localStorage
Delete.addEventListener("click", function() {
    localStorage.clear();
   
})

