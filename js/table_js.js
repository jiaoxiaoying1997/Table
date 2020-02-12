 	
// 	var l =document.querySelector('#left');
// 	var r =document.querySelector('#right'); 	 
 	//导航栏
			$(document).ready(function(){//等待dom元素加载完毕
				$(".has_children").click(function(){
					$(this).addClass("highlight")//为当前元素增加heighlight类
					.children("a").show().end()//将子节点的a元素显示出来并重新定位上次操的元素
					.siblings().removeClass("heighlight")//获取元素的兄弟元素，并去掉他们的类
					.children("a").hide();//将兄弟元素下的a元素隐藏
				});
			});
 	//Tab切换
 	
 	$("li").eq(0).css("color","blue");
        $(".current").eq(0).css("display","block");
        $("li").each(function (index) {
            $(this).click(function () {
                $(this).css("color","blue").siblings().css("color","#000");
                $(".content-iten").eq(index).css("display","block").siblings().css("display","none");
            })
        })
        $(function(){
    $("ul>li").click(function(){
        //给li添加下横线
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        //显示对应的div
        $('#tab').eq(index).addClass('current').siblings('div').removeClass('current');
    })
  }); 
//添加表格的列
			
			
			var data =  [
			 { num: "1", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "2", 
                time: "2020-01-29" , 
                title: "bbb" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "3", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "4", 
                time:  "2020-01-28" ,
                title: "bbbbbbb" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "5", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "6", 
                time: "2020-01-29" , 
                title: "accccc" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "7", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "8", 
                time:  "2020-01-28" ,
                title: "vvvvv" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "9", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "10", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "11", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "12", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "13", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "14", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "15", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "16", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "17", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "18", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "19", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "20", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "21", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "21", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "22", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "23", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                }, { num: "24", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "25", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "26", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "27", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "28", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "29", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "30", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "31", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "32", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "33", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "34", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "35", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "36", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "37", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },{ num: "38", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "39", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },{ num: "40", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "41",
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "42", 
                time: "2020-01-29" , 
                title: "bbb" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "43", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "44", 
                time:  "2020-01-28" ,
                title: "bbbbbbb" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "45", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "46", 
                time: "2020-01-29" , 
                title: "accccc" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "47", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "48", 
                time:  "2020-01-28" ,
                title: "vvvvv" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "49", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "50", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "51", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "52", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "53", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "54", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "55", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "56", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "57", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "58", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "59", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "60", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "61", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "61", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "62", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "63", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                }, { num: "64", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "65", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "66", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "67", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "68", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "69", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "70", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                 { num: "71", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                 { num: "72", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
                { num: "73", 
                time: "2020-01-29" , 
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               },
               { num: "74", 
                time: "2020-01-18" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                },
                { num: "75", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                }, { num: "76", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
               }, { num: "77", 
                time:  "2020-01-28" ,
                title: "aaaaaa" , 
                writer:"bbb" , 
                important:"1" , 
                read:"2020", 
                condition:"",
                nianji:""
                }
           ];
            //动态创建表格的方式，使用拼接html的方式 （推荐）
           
             var html = "";
            function creatTable(data){
           var tableData = ""
         //  console.log(data.length);
            	for(var i=0;i<data.length;i++){
            		
            	 tableData +="<tr style='width:2000px' class = 'hh'>"	
            	tableData += "<td style='width:100px;'>" + data[i].num + "</td>"
	  	 	tableData += "<td style='width:170px;'>" + data[i].time + "</td>"
	   		tableData += "<td style='width:330px;'>" + data[i].title + "</td>"
	   		tableData +="<td style='width:100px;'>" + data[i].writer + "</td>"
	   		tableData +=  "<td style='width:100px;'>" + data[i].important + "</td>"
	   		tableData +=   "<td style='width:70px;'>" + data[i].read + "</td>"
	   		tableData += "<td style='width:70;'>" + "<button class='zhaungtai' style = 'background-color: #888888;'>published</button>" + "</td>"
	   		tableData += "<td style='width:280;'>" +
	   		"<button class='cz1' style='height: 25px;width: 50px; margin-right:15px;background-color: blue;'>编辑</button> <button class='cz2' style='height: 25px;width: 50px; margin-right:15px;background-color: #FFFFFF;'>草稿</button>  <button class='cz3' style='height: 25px;width: 50px; margin-right:15px;background-color: red'>删除</button>"+ "</td>"
	   		 	tableData += "</tr>"	 
	   		 	
   	        } 	
            	$("#list").html(tableData); 
            }
            creatTable(data);
            var Arr = [];
           for(var i=0;i<data.length;i++)
           {
           	Arr[i] = data[i].num;
           }
           console.log(Arr.length);
            //点击发布按钮触发状态的改变
           
		　　  $('button.cz2').on("click",function(){
				  	$($(this)).css({"background-color":"yellow"});
				  	  $($(this)).text('发布');
				  	  alert("发布成功!")
				  	  $('button.zhaungtai').trigger('click');			  	
				  	  	$('button.zhaungtai').text('draft');
				  	  	//找不到他相对的class，导致改变一个所有的状态都发生变化改变
				  	  });
             //删除操作
		  $('button.cz3').on("click",function(){
		  //	 $("p").css({"background-color":"yellow"});
		   $(this).parents('tr').remove();
		  });
          
          //添加操作
          $('#btnAdd') .on("click",function(){
           	var maskWidth = $(document).width();
           	var maskHeight = $(document).height();
           	//遮罩层初始化
           	$('<div class="mask1"></div>').appendTo($('body'));
           	$('div.mask1').css({
           		'position':'fixed',
           		'top':0,
           		'left':0,
           		'background':'black',
           		'opacity':0.5,
           		'width':maskWidth,
           		'height':maskHeight,
           		'z-index':-1
           	});
          
           	$('#add').show();
           	//关闭操作
           	$('#close').on("click",function(){
           		$(this).parent().hide();
           		$('.mask1').remove();
           	});
           	
           	//保存添加操作		
           	$('#baocun').on("click",function(){
           		 	//将内容显示在弹出层中
           		 var data1 = [];	
           		function Total() {
           			var txt = $('.me1').find(':text');
           			for(var i=0;i<txt.length;i++){
           				data1.push(txt.eq(i).val());
           			}
           		}
           		 Total();
           		creatTable1(data1); 
           		});     	
          });	
    //添加一个新的内容表格
    function creatTable1(data1) {

		var $trTemp = $("<tr style='width:2000px'></tr>");
		//往行里面追加 td单元格
		$trTemp.append("<td style='width:100px;'>" + data1[0] + "</td>");
		$trTemp.append("<td style='width:170px;'>" + data1[1] + "</td>");
		$trTemp.append("<td style='width:330px;'>" + data1[2] + "</td>");
		$trTemp.append("<td style='width:100px;'>" + data1[3] + "</td>");
		$trTemp.append("<td style='width:100px;'>" + data1[4] + "</td>");
		$trTemp.append("<td style='width:70px;'>" + data1[5] + "</td>");
		$trTemp.append("<td style='width:70px;'>" + "<button class='zhaungtai' style = 'background-color: #888888;'>published</button>" + "</td>");
		$trTemp.append("<td style='width:280px;'>" + "<button class='cz1' style='height: 25px;width: 50px; margin-right:15px;background-color: blue;'>编辑</button>  <button class='cz2' style='height: 25px;width: 50px; margin-right:15px;background-color: #FFFFFF;'>发布</button>  <button class='cz3' style='height: 25px;width: 50px; margin-right:15px;background-color: red'>删除</button>" + "</td>");
		$trTemp.appendTo("#list");
	}
         //编辑操作
         
           $('button.cz1') .on("click",function(){
           	var maskWidth = $(document).width();
           	var maskHeight = $(document).height();
           	//遮罩层初始化
           	$('<div class="mask"></div>').appendTo($('body'));
           	$('div.mask').css({
           		'position':'fixed',
           		'top':0,
           		'left':0,
           		'background':'black',
           		'opacity':0.5,
           		'width':maskWidth,
           		'height':maskHeight,
           		'z-index':-1
           	});
           	 	$('#add').show();
           	//关闭操作
           	$('#close').on("click",function(){
           		$(this).parent().hide();
           		$('.mask').remove();
           	});

           //保存操作	
          	$('#baocun').on("click",function(){
          		
          		console.log($(this).parents('tr').b);
           	  });
           
           });   
           //分页部分      
       
 $(function seach() {
	var $table = $('table');
	var currentPage = 0; //当前页默认值为0  
	var pageSize = 16; //每一页显示的数目  
	$table.bind('paging', function() {
		$table.find('tbody tr').hide().slice(currentPage * pageSize, (currentPage + 1) * pageSize).show();
	});
	var sumRows = $table.find('tbody tr').length;//表格总行数的获取
	var sumPages = Math.ceil(sumRows / pageSize); //总页数  

	var $pager = $('<div class="page"></div>'); //新建div，放入a标签,显示底部分页码 
	/*$pager.append("<button class='prev' onclick='shouye()'>首页</button>");*/
	for(var pageIndex = 0; pageIndex < sumPages; pageIndex++) {
		$('<a href="#" id="pageStyle" onclick="changCss(this)"><span>' + (pageIndex + 1) + '</span></a>').bind("click", {
			"newPage": pageIndex
		}, function(event) {
			currentPage = event.data["newPage"];
			$table.trigger("paging");
			//触发分页函数  
		}).appendTo($pager);
		$pager.append(" ");
		}
	/*$pager.append("<button class='next'>下一页</button>");*/
//	
//	$('.next').click(function(){
//		var ar = document.getElementsByTagName("a");
//		for(var i=0;i<sumPages;i++){
//			
//					ar[i+1]=a[i];
//		}
//	})
	$pager.insertAfter($table);
	$table.trigger("paging");
	//默认第一页的a标签效果  
	var $pagess = $('#pageStyle');
	$pagess[0].style.backgroundColor = "#006B00";
	$pagess[0].style.color = "#ffffff";
});
//function shouye(obj){
//	
//	var arr = document.getElementsByTagName("a");
//	arr[3] = pageIndex
//	console.log(arr[3]);
//}
//a链接点击变色，再点其他回复原色  
function changCss(obj) {
	var arr = document.getElementsByTagName("a");
	for(var i = 0; i < arr.length; i++) {
		if(obj == arr[i]) { //当前页样式  
			obj.style.backgroundColor = "#006B00";
			obj.style.color = "#ffffff";
		} else {
			arr[i].style.color = "";
			arr[i].style.backgroundColor = "";
		}
	}
}    
      //搜索功能
         
    $("#btnReverse").click(function () {
        var $sea=$('#imp').val();
        //先隐藏全部，再把符合筛选条件的值显示
        $('table tbody tr').hide().filter(':contains('+$sea+')').show();
        
        
    });

         
         
         
         /*    $(function(){
          
            for( var i = 0; i < data.length; i++ ) {
                //动态创建一个tr行标签,并且转换成jQuery对象
                var $trTemp = $("<tr class='hh'></tr>");
                //往行里面追加 td单元格
                $trTemp.append("<td class='row'>"+ data[i].num+"</td>");
                $trTemp.append("<td class='row'>"+ data[i].time  +"</td>");
                $trTemp.append("<td class='row'>"+ data[i].title +"</td>");
                 $trTemp.append("<td class='row'>"+ data[i].writer+"</td>");
                $trTemp.append("<td class='row'>"+ data[i].important  +"</td>");
                $trTemp.append("<td class='row'>"+ data[i].read  +"</td>");
                 $trTemp.append("<td class='row'>"+ "<button class='zhaungtai' style = 'background-color: #888888;'>draft</button>" + "</td>");
                $trTemp.append("<td class='row'>"+ "<button class='cz1' style='height: 25px;width: 50px; margin-right:15px;background-color: blue;'>编辑</button>  <button class='cz2' style='height: 25px;width: 50px; margin-right:15px;background-color: #FFFFFF;'>发布</button>  <button class='cz3' style='height: 25px;width: 50px; margin-right:15px;background-color: red'>删除</button>"+"</td>");
                $trTemp.appendTo("#list");
            }
             }); 
          */  
        
             
             
             
             
            
 // $('.cz3').click(function(){
  //  $(this).parents('.hh').remove();
 // });
             
    //获取随机时间         
  /*  function ConsoleRandomDate() {
        var maxdaterandom = new Date().getTime();
        // 由于当前环境为北京GMT+8时区，所以与GMT有8个小时的差值
        var mindaterandom = new Date(2000, 0, 1, 8).getTime();
        var randomdate = getRandom(mindaterandom, maxdaterandom);
        var datestr = moment(randomdate).format("YYYY-MM-DD");
        console.log(datestr);
    }
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }*/
   
             
             
             
             
             
             
             
             
             
             
             
      
             //第二种： 动态创建表格的方式，使用动态创建dom对象的方式
            //清空所有的子节点
            //$("#J_TbData").empty();

            //自杀
           //  $("#J_TbData").remove();
 
      
      //添加笼罩层
    /*   function addShade() {
      var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      $("body").append('<div class="loading-shade"></div>');
      $("body").appendTo("#add");
      //$(".loading-shade").css("height",htmlHeight+"px");
      $(".loading-shade").css("100%");
    }
      alert(2);
       /*删除页面遮罩*/
    /*function removeShade() {
      $(".loading-shade").remove();
    }
     /*页面遮罩点击关闭弹出层
     * dom=>#id
     * type => hide || remove
     * */
    
    
  /*  function closeDiv(dom, type) {
      $(".loading-shade").click(function() {
        type == "hide" ? $(dom).hide() : $(dom).remove();
        $(".loading-shade").remove();
      })
    }
    //需要调用的页面添加的js（这里是点击遮罩层实现遮罩层（即：.loading-shade）页面关闭）
     $('#sexlog,#personsex').unbind("click").bind("click",function(){
       alert(2);addShade();
       
       $('#add').show();
       del();
    });
    function del(){
       $('.loading-shade').bind('click',function(){
         $('.loading-shade').remove();
         $('#add').hide();
      });
    }

//点击添加显示界面
//查看操作
/*
 $(function add_line()
 {
 	 $('#btnAdd').click(function(){
    //获取文档的宽和高
    var maskWidth = $(document).width();
    var maskHeight = $(document).height();
     //遮罩层初始化
    $('<div class="mask"></div>').appendTo($('body'));
    $('div.mask').css({
 
      'top':0,
      'left':0,
      'background':'black',
      'opacity':0.5,
      'width':maskWidth,
      'height':maskHeight,
      'z-index':2
    });
     var data1 = [];//保存数据的数组
    //将一行的数据添加到数据中
    $(this).parent().siblings().each(function(){
      data.push($(this).text())
    });
    //将内容显示到弹出层中
    $(' div #list').children().each(function(i){
      $(this).children('span').text(data1[i]);
    });
    $('div #list').show();//显示弹出层
    
 });
 */

