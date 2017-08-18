function  myFunction() {
    $.ajax({
        url:"https://swarfarm.com/api/bestiary.json",
        type:'GET'

    }).done(function (data){

    });
}
this.getMonsterData = function (args, callback) {
    $.ajax({
        type : 'GET',
        url: 'https://swarfarm.com/api/bestiary.json',
    }).done(function (data) {
        $.each(data, function (key, value) {
            SWO.api.swarfarm.monsterDataSelect += '<option value="' + value.com2us_id + '">' + value.name + ' (' + value.element + ')</option>';
        });

        if (callback)
            SWO.api.swarfarm[callback](args);
    });
}

