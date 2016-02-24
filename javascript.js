$(function()
{
	console.log("Let's go!!!");
	var player = true;
	var playerX = [[null,null,null],
				   [null,null,null],
				   [null,null,null]];
	var playerO = [[null,null,null],
				   [null,null,null],
				   [null,null,null]];

	function checkWinner(array)
	{
		for(i=0; i<array.length; i++)
		{
			if(array[i][0] && array[i][1] && array[i][2]) return true;
			if(array[0][i] && array[1][i] && array[2][i]) return true;
		}
		if(array[0][0] && array[1][1] && array[2][2]) return true;
		if(array[0][2] && array[1][1] && array[2][0]) return true;
		return false;
	}

	function newGame()
	{
		window.location.reload();
	}

	function enterChoice(array,choice)
	{
		var count = 0;
		array.forEach(function(row,j)
		{
			row.forEach(function(cell,i)
			{
				count++;
				if(count==choice)
				{
					array[j][i] = true;
				}
			})
		})
	}

	var listener = function(event)
	{
		var gird = $('#'+event.currentTarget.id)
		var id = gird.attr("id");
		if(player)
		{
			$('#instructions p').text("It is O's turn");
			gird.addClass("blue").text("x");
			enterChoice(playerX,id);
		}
		else
		{
			$('#instructions p').text("It is X's turn");
			gird.addClass("red").text("o");
			enterChoice(playerO,id);
		}
		if(checkWinner(player?playerX:playerO))
		{
			var winner = player?"Player X":"Player O";
			alert(winner+" won the game!");
			newGame();
		}
		player = !player;
		$('#'+event.currentTarget.id).off('click',listener);
	}

	$('.box').on('click',listener);
	$('button').on('click',newGame);
})