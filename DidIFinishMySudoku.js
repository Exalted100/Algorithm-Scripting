/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. 
If the board is valid return 'Finished!', otherwise return 'Try again!'
*/


function doneOrNot(board){
    let test = 'Finished!'
      
      for (let i = 0; i < board.length; i++) {
      
        if ( board[i].includes(1) && board[i].includes(2) && board[i].includes(3) && board[i].includes(4) && board[i].includes(5) && board[i].includes(6) && board[i].includes(7) && board[i].includes(8) && board[i].includes(9) && board[i].length === 9 ) {
          
        } else {
            test = 'Try again!'
        }
      }
      
      firstArr = []
      secondArr = []
      thirdArr = []
      fourthArr = []
      fifthArr = []
      sixthArr = []
      seventhArr = []
      eightArr = []
      ninthArr = []
      
      for (let i = 0; i < 9; i++) {
        firstArr.push(board[i][0])
      }
      
        for (let i = 0; i < 9; i++) {
        secondArr.push(board[i][1])
      }
      
        for (let i = 0; i < 9; i++) {
        thirdArr.push(board[i][2])
      }
      
        for (let i = 0; i < 9; i++) {
        fourthArr.push(board[i][3])
      }
      
        for (let i = 0; i < 9; i++) {
        fifthArr.push(board[i][4])
      }
      
        for (let i = 0; i < 9; i++) {
        sixthArr.push(board[i][5])
      }
      
        for (let i = 0; i < 9; i++) {
        seventhArr.push(board[i][6])
      }
      
        for (let i = 0; i < 9; i++) {
        eightArr.push(board[i][7])
      }
      
        for (let i = 0; i < 9; i++) {
        ninthArr.push(board[i][8])
      }
      
      let boardOther = [firstArr, secondArr, thirdArr, fourthArr, fifthArr, sixthArr, seventhArr, eightArr, ninthArr]
      
      for (let i = 0; i < 9; i++) {
      
        if ( boardOther[i].includes(1) && boardOther[i].includes(2) && boardOther[i].includes(3) && boardOther[i].includes(4) && boardOther[i].includes(5) && boardOther[i].includes(6) && boardOther[i].includes(7) && boardOther[i].includes(8) && boardOther[i].includes(9) && boardOther[i].length === 9 ) {
          
        } else {
            test = 'Try again!'
        }
      }
      
      for (let i = 0; i < 9; i = i + 3) {
        if (board[i][0] + board[i][0+1] + board[i][0+2] + board[i+1][0] + board[i+1][0+1] + board[i+1][0+2] + board[i+2][0] + board[i+2][0+1] + board[i+2][0+2] === 45) {
    
        } else {
            test = 'Try again!'
        }
      }
      
      return test
  }