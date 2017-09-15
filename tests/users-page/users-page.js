function UsersPage() {
    this.usersBreadcrumbsHome = element(by.xpath('//ul[@class="breadcrumb ng-scope"]//a[text()="home"]'));
    this.usersBreadcrumbsUsers = element(by.xpath('//ul[@class="breadcrumb ng-scope"]//a[text()="users"]'));

}

module.exports = UsersPage;