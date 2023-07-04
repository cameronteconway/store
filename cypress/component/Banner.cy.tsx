import Banner from '../../src/components/Banner';
import { bannerImages } from '../../src/data/data';

describe('<Banner />', () => {
    it('renders', function () {
        cy.mount(<Banner data={bannerImages} />);
    });
    it('first banner renders correctly', function () {
        cy.mount(<Banner data={bannerImages} />);
        cy.get('div.swiper-pagination')
            .find('span:nth-child(1)')
            .should('have.class', 'swiper-pagination-bullet-active');
        cy.get('div.swiper-slide-active')
            .find('span.banner__text')
            .should('have.text', 'Stand out in a crowd');
    });
    it('second banner renders correctly', function () {
        cy.mount(<Banner data={bannerImages} />);
        cy.get('div.swiper-pagination span:nth-child(2)').click({
            force: true,
        });
        cy.get('div.swiper-pagination')
            .find('span:nth-child(2)')
            .should('have.class', 'swiper-pagination-bullet-active');
        cy.get('div.swiper-slide-active')
            .find('span.banner__text')
            .should('have.text', 'Black and white styles');
    });
    it('third banner renders correctly', function () {
        cy.mount(<Banner data={bannerImages} />);
        cy.get('div.swiper-pagination span:nth-child(3)').click({
            force: true,
        });
        cy.get('div.swiper-pagination')
            .find('span:nth-child(3)')
            .should('have.class', 'swiper-pagination-bullet-active');
        cy.get('div.swiper-slide-active')
            .find('span.banner__text')
            .should('have.text', 'Summer Collection');
    });
});
