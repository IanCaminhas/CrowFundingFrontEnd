

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function(){
	
	/* ao clicar na div com id="box" executa a função */
	$("#inputTipoUser").click(function(){
		
        /* a função muda o background da div com id="box" */
        
        var tipoUser = $("#inputTipoUser").val();

        if( tipoUser == 1){
            $(".corFundoLoginHeader").css("background","#0177F7");
            $(".corFundoLoginBody").css("background","#6AB0FF");
        }

        if( tipoUser == 2){
            $(".corFundoLoginHeader").css("background","#F7BB05");
            $(".corFundoLoginBody").css("background","#FEDA7E");
        }
        
        
       
		
	});
	
});