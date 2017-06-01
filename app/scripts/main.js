$(function(){
    'use strict';

    $('a#recomendar').on('click', function(e){
        // /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

        var random = Math.floor((Math.random() * 1000) + 1);

        /*var movie = {"Title":"Wonder Woman","Year":"2017","Rated":"PG-13","Released":"02 Jun 2017","Runtime":"141 min","Genre":"Action, Adventure, Fantasy","Director":"Patty Jenkins","Writer":"Allan Heinberg (screenplay), Zack Snyder (story by), Allan Heinberg (story by), Jason Fuchs (story by), William Moulton Marston (Wonder Woman created by)","Actors":"Gal Gadot, Robin Wright, David Thewlis, Connie Nielsen","Plot":"Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.","Language":"English","Country":"USA","Awards":"1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"8.4","imdbVotes":"3,428","imdbID":"tt0451279","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://wonderwomanfilm.com/","Response":"True"};
        $('#poster').attr("src", movie.Poster);
        $('#title').html(movie.Title);
        $('#year').html(movie.Year);
        $('#production').html(movie.Production);
        $('#director').html(movie.Director);
        $('#actors').html(movie.Actors);
        $('#plot').html(movie.Plot);*/

        $.ajax({
            url: ('https://api.themoviedb.org/3/movie/'+ random +'?api_key=2733fefa7d8e6bf819583ef862c65756&language=pt-br'),
            complete: function(xhr){
                movieTHEMOVIEDB(xhr.responseJSON);
                $('div#modalMovie').modal('show');
            },
            error: function(xhr){
                anotherMovie();
            }
        });
    });


    $('button#outroFilme').on('click', function(){
        /*var movie = {"Title":"Wonder Woman","Year":"2017","Rated":"PG-13","Released":"02 Jun 2017","Runtime":"141 min","Genre":"Action, Adventure, Fantasy","Director":"Patty Jenkins","Writer":"Allan Heinberg (screenplay), Zack Snyder (story by), Allan Heinberg (story by), Jason Fuchs (story by), William Moulton Marston (Wonder Woman created by)","Actors":"Gal Gadot, Robin Wright, David Thewlis, Connie Nielsen","Plot":"Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.","Language":"English","Country":"USA","Awards":"1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"8.4","imdbVotes":"3,428","imdbID":"tt0451279","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://wonderwomanfilm.com/","Response":"True"};
        $('#poster').attr("src", movie.Poster);
        $('#title').html(movie.Title);
        $('#year').html(movie.Year);
        $('#production').html(movie.Production);
        $('#director').html(movie.Director);
        $('#actors').html(movie.Actors);
        $('#plot').html(movie.Plot);*/
        anotherMovie();
      });

      function anotherMovie(){
          var random = Math.floor((Math.random() * 100) + 1);
          $.ajax({
              url: ('https://api.themoviedb.org/3/movie/'+ random +'?api_key=2733fefa7d8e6bf819583ef862c65756&language=pt-br'),
              complete: function(xhr){
                  movieTHEMOVIEDB(xhr.responseJSON);
              },
              error: function(xhr){
                  anotherMovie();
              }
          });
      }


    function movieTHEMOVIEDB(movie){
          //url: https://api.themoviedb.org/3/movie/'+ random +'?api_key=2733fefa7d8e6bf819583ef862c65756&language=pt-br
          $('#poster').attr("src", 'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
          $('#title').html(movie.title);
          $('#year').html(movie.release_date.substring(0, 4));
          $('#production').html(movie.production_companies[0]);
          $('#director').html(' Por enquanto não :( ');
          $('#actors').html(' Por enquanto não :( ');
          $('#plot').html(movie.overview);
    }

    function movieOMDB(movie){
          //url: 'https://www.omdbapi.com/?api?apikey=2627573b&i=tt0451279',
          $('#poster').attr("src", movie.Poster);
          $('#title').html(movie.Title);
          $('#year').html(movie.Year);
          $('#production').html(movie.Production);
          $('#director').html(movie.Director);
          $('#actors').html(movie.Actors);
          $('#plot').html(movie.Plot);
    }
















});