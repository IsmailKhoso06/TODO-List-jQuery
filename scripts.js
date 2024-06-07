$(document).ready(function(){
    $('#add-task').on('click', function(){
        var newTask = $('#new-task').val();
        if(newTask){
            $("#task-list").append('<li>' + newTask + '<button class="edit">Edit</button> <button class="delete">Delete</button>  </li> <p class="para">If you have completed (' + $('#new-task').val() + ') task, then click on it to make it completed </p>' );
            $('#new-task').val('');
        }
    });

    $('#task-list').on('click', 'li' , function(){
        $(this).toggleClass("completed");
        $(".para").toggleClass('completion')
    });

    $('#task-list').on('click', ".delete", function(e){
        e.stopPropagation();
        $(this).parent().remove();
        $('.para').remove();
    });

    $('#task-list').on("click", '.edit' , function(){
        var editTask = $(this).parent().text().replace("EditDelete", '');
        var editedTask = prompt('Replace Task With:', editTask);
        if(editedTask){
            $(this).parent().contents().first()[0].textcontent = editedTask;
        }

    });


});