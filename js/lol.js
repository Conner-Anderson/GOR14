
            $(document).ready(function(){
                
                
                var kkeys = [];
                var konami = "38,38,40,40,37,39,37,39,66,65";
                var rick = false;
                
                $("#lol").click(function() {
                    if (rick==false) {
                        
                    
                    window.open('http://www.youtube.com/watch?v=oHg5SJYRHA0');
                    rick = true;
                    }
                    //setInterval(function(){
                    //    $(".page").css({
                    //        backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
                    //    });
                    //},80);
                });
                
                $(document).keydown(function(e) {
                    kkeys.push(e.keyCode);
                    
                    if (kkeys.toString().indexOf(konami) >= 0) {
                        $(document).unbind('keydown', arguments.callee);
                        $('#discoBall').show();
                        $(document).bind('mousemove scroll', function(e){
                            $('#lol').css({
                                left: e.pageX - 80,
                                top: e.pageY - 80
                            });
                            $(".page").css({
                            backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
                            });
                        });
                        $(document).mousemove();
                        $('#lol').show();
                        $('p').css(
                            "font-family", "Comic Sans MS"
                            );
                        
                        
                    }
                });
            })
        