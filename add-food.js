document.getElementById('add-food-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const foodName = document.getElementById('food-name').value;
    const calories = document.getElementById('calories').value;
    
    addFood(foodName, calories);
    
    // เพิ่มข้อมูลลงฐานข้อมูล
});

document.getElementById('add-burned-calories').addEventListener('click', function() {
    const calories = prompt('Enter burned calories:');
    addBurnedCalories(calories);
});
