class HomeController {
  constructor($http, ListingModel) {
    this.$http = $http;
    this.ListingModel = ListingModel;
  }


  $onInit() {
    this.ListingModel.query()
      .then((response) => {
        this.listings = response.data;
      });
  }
  getNumberOfBedCapacity(listing){
  return new Array(listing.bed_capacity);
  }

}

HomeController.$inject = ['$http', 'ListingModel'];

export default HomeController;
