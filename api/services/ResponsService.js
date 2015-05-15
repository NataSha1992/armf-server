module.exports = {
    //метод для формироания успешного ответа с сервера
    success: function(obj){
        return {
            status:'success',
            error:{},
            data:obj
        };
    },
    //метод для формирования ошибочного ответа с сервера
    error: function(obj){
        return {
            status:'error',
            error:obj,
            data:{}
        };
    },
    APIError:{
        //
        NormsNotFound: {code: 100, text: 'Данные по нормативам не найдены!'},
        ClassesNotFound: {code: 100, text: 'Данные по клаассам не найдены'},
        PupilsNotFound: {code: 100, text: 'Данные по ученикам не найдены'},

                //серверная ошибка
        Server: {code: 500, text: 'Ошибка сервера!'}
    }
};