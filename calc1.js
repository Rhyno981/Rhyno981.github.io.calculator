function insert(num) {
document.form1.answer.value = document.form1.answer.value + num;
}
function equal()
{
var exp = document.form1.answer.value;
if(exp)
{
document.form1.answer.value = eval(exp)
}
}