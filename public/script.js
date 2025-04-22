// function submitVote(){
//     document.getElementById("submitVote").onclick = function () {
//       const voterID = document.getElementById("voterID").value.trim();
//       const pin = document.getElementById("pin").value.trim();
//       const choice1 = document.getElementById("choice1").value;
//       const choice2 = document.getElementById("choice2").value;
//       const choice3 = document.getElementById("choice3").value;

//       if (!voterID || !pin || choice1 === "null" || choice2 ==="null" || choice3 === "null") {
//             alert("Error: Fill out all fields");
//             return;
//           }
//           if (choice1 == choice2 || choice2 == choice3 || choice3 == choice1){
//             alert("Error: Duplicate candidates");
//             return;
//           }
    
//           alert("Vote submitted successfully!");
//     };

//    //Fetch "SubmitVotes"
//    const voteData = {
//         voterID,
//         pin,
//         choice1,
//         choice2,
//         choice3
//    };

//    fetch("/submitVote", {
//         method: "POST",
//         headers : {
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(voteData)
//    })
//    .then(res => res.join())
//    .then(data => {
//         console.log(data);
//    })
//    .catch(err => {
//         console.log(err);
//    });

//}

document.addEventListener("DOMContentLoaded", () => {
     const submitBtn = document.getElementById("submitVote");
   
     submitBtn.addEventListener("click", () => {
          const voterID = document.getElementById("voterID").value.trim();
          const pin = document.getElementById("pin").value.trim();
          const choice1 = document.getElementById("choice1").value;
          const choice2 = document.getElementById("choice2").value;
          const choice3 = document.getElementById("choice3").value;

          if (!voterID || !pin || choice1 === "null" || choice2 === "null" || choice3 === "null") {
            alert("Error: Fill out all fields");
            return;
          }
          if (choice1 === choice2 || choice2 === choice3 || choice3 === choice1) {
            alert("Error: Duplicate candidates");
            return;
          }

          alert("Vote submitted successfully!");
          
          const voteData = {
               "voterID":voterID,
               "regPIN":pin,
               "firstChoice":choice1,
               "secondChoice":choice2,
               "thirdChoice":choice3
          };   
          fetch("/submitVote", {
               method: "POST",
               headers : {
                   "Content-Type": "application/json"
               },
               body:JSON.stringify(voteData)
          })
          .then(res => res)
          .then(data => {
               console.log(data);
          })
          .catch(err => {
               console.log(err);
          });
     });
   });