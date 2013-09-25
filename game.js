var tt = function () {
    var col = 6;
    var row = 7;
    var id = 'gametable';
    var i = 0;
    var matchCount = 3; // matching 4 
    var bfn='';
    var afn='';

    function init(option) {
        setOption(option);
        var str = drawTable(col, row);
        $('#' + id).append('<div id="spec"><p>Player 1 : <div style="width:10px;height:10px;background:RED; border: 1px RED insight"/></p><p>Player 2 : <div style="width:10px;height:10px;background:GREEN; border: 1px GREEN insight"/></p></div><div id="playermove"></div>');
        $('#' + id).append(str);
        $('#playermove').html('Player 1 move');

    }
	function beforeMove(fn){
	fn();		
		}
		function afterMove(fn){
	fn();		
		}
    function setOption(option) {
        if (typeof option !== 'undefined') {
            if (typeof option.col !== 'undefined') {
                col = option.col;
            }
            if (typeof option.row !== 'undefined') {
                row = option.row;
            }
            if (typeof option.id !== 'undefined') {
                id = option.id;
            }
            if (typeof option.matchCount !== 'undefined') {
                matchCount = parseInt(option.matchCount,10)-1;
                if((matchCount+1) < parseInt(col,10) || (matchCount+1)< parseInt(row,10)){
						alert("Match Count is less than row or col number !please change it before making game!")                	
                	}
            }
             if (typeof option.bfn !== 'undefined') {
                bfn = option.bfn;
            }
             if (typeof option.afn !== 'undefined') {
                afn = option.afn;
            }
        }
    }

    function drawTable(row, col) {
        var str = '';
        str = '<table class="table">';
        for (var i = 1; i <= row; i++) {
            str += "<tr>";
            for (var j = 1; j <= col; j++) {
                str += "<td><input size='10' class='gameInput' type='text' name='[" + i + "][" + j + "]' id='" + i + "_" + j + "'  value='' onclick='tt.move(this)';/></td>";
            }
            str += '</tr>';
        }
        str += "</table>";
        return str;
    }

    function move(obj) {
    	beforeMove(bfn);
        i++;
        var str = changePlayer(i);

        if (str == 'player1') {
            $(obj).css("background", 'RED');
        } else {
            $(obj).css("background", 'GREEN');
        }
        $(obj).val(str);
        $(obj).attr("readonly", true);
        $(obj).attr("disabled", true);
        if (checkmove(obj, str)) {
            end();
        }
        afterMove(afn);
    }

    function changePlayer(i) {
        var str = '';

        if (i % 2 == 0) {
            if ($('#playermove').length) $('#playermove').html('Player 1 move');
            str = 'player2';
        } else {
            $('#playermove').html('Player 2 move');
            str = 'player1';
        }
        return str;
    }

    function checkmove(obj, player) {
        var id = $(obj).attr('id');
        var posArr = id.split("_");
        var row = parseInt(posArr[0], 10);
        var col = parseInt(posArr[1], 10);
        if (checkHorzon(row, col, player)) {
            alert(player + ' won the match');
            if ($('#playermove').length) {
                $('#playermove').html(player + ' won the match');
            }

            return true;
        }
        if (checkVertical(row, col, player)) {
            alert(player + ' won the match');
            if ($('#playermove').length) {
                $('#playermove').html(player + ' won the match');
            }
            return true;
        }
        if (checkDiagonal(row, col, player)) {
            alert(player + ' won the match');
            if ($('#playermove').length) {
                $('#playermove').html(player + ' won the match');
            }
            return true;
        }
        return false;
    }

    function checkHorzon(r, c, player) {
        var i = r;
        var j = 1;
        if ((c - matchCount) <= 1) {
            j = 1;
        } else {
            j = c - matchCount;
        }
        var jmax = 1;
        if ((c + matchCount) > col) {
            jmax = col;
        } else {
            jmax = c + matchCount;
        }

        var count = 0;
        for (j; j <= jmax; j++) {
            if ($('#' + i + '_' + j).val() == player) {
                count++;
                if (count > matchCount) {
                    return true;
                }
            } else {
                count = 0;
            }

        }
        return false;
    }

    function checkDiagonal(r, c, player) {



        var imin = 1;
        var jmin = 1;
        if ((c - matchCount) < 1) {
            jmin = 1;
        } else {
            jmin = c - 3;
        }
        var jmax = 1;
        if ((col + matchCount) > col) {
            jmax = col;
        } else {
            jmax = c + matchCount;
        }
        if ((r - matchCount) < 1) {
            imin = 1;
        } else {
            imin = r - matchCount;
        }
        var imax = 1;
        if ((r + matchCount) >= row) {
            imax = row;
        } else {
            imax = r + matchCount;
        }

        var count = 0;

        for (jmin, imin; jmin <= jmax && imin <= imax; imin++, jmin++) {
            if ($('#' + imin + '_' + jmin).val() == player) {
                count++;
                if (count > matchCount) {
                    return true;
                }
            } else {
                count = 0;
            }

        }

        for (jmax, imin; jmax <= jmin && imin <= imax; imin++, jmax--) {
            if ($('#' + imin + '_' + jmax).val() == player) {
                count++;
                if (count > matchCount) {
                    return true;
                }
            } else {
                count = 0;
            }

        }
        return false;

    }

    function checkVertical(r, c, player) {
        var i = 1;
        var j = c;
        if ((r - matchCount) < 1) {
            i = 1;
        } else {
            i = r - matchCount;
        }
        var imax = 1;
        if ((r + matchCount) >= row) {
            imax = row;
        } else {
            imax = r + matchCount;
        }


        var count = 0;
        for (i; i < imax; i++) {
            if ($('#' + i + '_' + j).val() == player) {
                count++;
                if (count > matchCount) {
                    return true;
                }
            }
            else {
                count = 0;
            }
        }
        return false;

    }

    function end() {
        $('.gameInput').attr('disabled', true);
        $('.gameInput').attr('readonly', true);


    }

    return {
        init: init,
        move: move
    }
}();