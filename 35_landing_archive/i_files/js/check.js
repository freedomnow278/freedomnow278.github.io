
function check()
{
	valid = true;
	
        if($('#order_form').find('input[name="name"]').val() == ('пидор') || $('#order_form').find('input[name="name"]').val() == ('лохотрон') || $('#order_form').find('input[name="name"]').val() == ('Лохотрон'))
        {
				valid = false;
				alert('Введите настоящее имя!');
        }else {
		valid = true;
		}
		
        return valid;
}