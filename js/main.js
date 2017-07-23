// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});



// Кнопка «Наверх/Вниз»
var lastScrollPosition = 0; 

$('#scroll-up').click( function(){
	if ( $(document).scrollTop() > 0 ) {
		$('body').animate({scrollTop:0},1000);
		lastScrollPosition = $(document).scrollTop();
	} else {
		$('body').animate({scrollTop:lastScrollPosition},1000);
	}	
});

$(document).scroll( function() {
	if ( $(document).scrollTop() > 0 ) {
		$('#scroll-up').fadeIn();
		$('#scroll-up').text('Наверх');
	} else {
		$('#scroll-up').text('Вниз');
	}
});