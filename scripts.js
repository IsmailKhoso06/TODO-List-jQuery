$(document).ready(function(){
    $('#add-task').on('click', function(){
        var newTask = $('#new-task').val();
        if(newTask){
            $("#task-list").append('<li>' + newTask + '<button class="edit">Edit</button> <button class="delete">Delete</button></li>');
            $('#new-task').val('');
        }
    });

    $('#task-list').on('click', 'li' , function(){
        $(this).toggleClass("completed");
    });

    $('#task-list').on('click', ".delete", function(e){
        e.stopPropagation();
        $(this).parent().remove();
        var editTask = $(this).parent().text().replace("Edit Delete", '').trim();
        showAlert(`You have deleted ${editTask} from your Tasks`);
    });

    $('#task-list').on("click", '.edit' , function(e){
        e.stopPropagation();
        var editTask = $(this).parent().text().replace("Edit Delete", '').trim();
        var editedTask = prompt('Replace Task With:', editTask);
        if(editedTask){
            listItem.contents().first().replaceWith(editedTask);
        }
        alert(`Your task is now updated as ${editedTask}`);
    });

    function showAlert(message){
        var alertText = '<div class="alert" role="alert">' + message + '</div>' ;
        $("#alert-container").html(alertText);
        setTimeout(function(){
            $('#alert-container').html('');
        }, 3000);
    }
    
});
