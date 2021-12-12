describe('Use of dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept(
      {
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      }, 
      [
        {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.625,
        "release_date": "2020-09-29"
        },
        {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 5.2727272727272725,
        "release_date": "2020-09-04"
        },
        {
        "id": 718444,
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "title": "Rogue",
        "average_rating": 6.166666666666667,
        "release_date": "2020-08-20"
        }
      ]
    ).as('getMovies');
  });

  it('Should access dashboard at proper URL', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
  });

  it('Should be able to click on a movie and move to a new page with the clicked movie\'s details', () => {
    cy.get('.movie')
      .get('.title')
      .contains('Money Plane')
      .click();
    
    cy.url()
      .should('include', '/694919')
  });

  it('Should be able to click on a different movie and move to that movie\'s details', () => {
    cy.get('.movie')
      .get('.title')
      .contains('Rogue')
      .click();

    cy.url()
      .should('include', '/718444')
  });

  it('Should return the home dashboard when the "Go Back" button is clicked', () => {
    cy.get('.movie')
      .get('.title')
      .contains('Money Plane')
      .click()
      .get('button')
      .click()

    cy.get('h1')
      .contains('Rancid Tomatillos')
  })

  it('Should go to proper movie details if specific id is given in URL', () => {
    cy.visit('http://localhost:3000/337401')
      .get('.movie-display')
      .get('.movie-content')
      .get('.movie-info')
      .get('h2')
      .contains('Mulan');
  })
});