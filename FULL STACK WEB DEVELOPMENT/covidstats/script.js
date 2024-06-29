$.ajax(
    {
        type:'get',
        url: 'https://api.covid19api.com/summary',
        success: function(responce)
        {
            console.log(responce.Countries)
            for(var i=0; i<responce.Countries.length;i++)
                {
                    var totalactive = responce.Countries[i].TotalConfirmed-responce.Countries[i].TotalRecovered
                    var tablerow = `<tr> <td>${responce.Countries[i].Country}</td> <td>${responce.Countries[i].TotalConfirmed} </td>
                    <td>${totalactive}</td><td>${responce.Countries[i].Totalrecovered}</td><td>${responce.Countries[i].TotalDeath}</td>`
                    $('#tbody').append(tablerow)
                }
        },
        error: function(error)
        {
            console.log(error)
        }
    }
)