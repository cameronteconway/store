import Blog from '../../src/components/Blog';

describe('<Blog />', () => {
    beforeEach('Load fixture data', () => {
        cy.fixture('blog').then(function (data) {
            this.data = data;
        });
    });
    it('renders', function () {
        cy.mount(<Blog content={this.data} />);
    });
    it('Blog has correct date', function () {
        cy.mount(<Blog content={this.data} />);
        cy.get('.blog__date').should('have.text', '29 Jul, 2022');
    });
    it('Blog link is correct', function () {
        cy.mount(<Blog content={this.data} />);
        cy.get('.blog__link').should(
            'have.attr',
            'href',
            'https://www.bbc.co.uk/news/science-environment-60382624'
        );
    });
    it('Blog has stats', function () {
        cy.mount(<Blog content={this.data} />);
        cy.get('.blog__detail').children().should('have.length', 2);
    });
});
