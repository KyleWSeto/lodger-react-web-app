import "./index.css";

function SearchHotel() {
    return (
        <div class="pb-5">
            <div class="proj-bg-color-detail">
                <div class="py-5">
                    <h1 class="text-center proj-heading-profile">[hotel search data name]</h1>
                </div>
            </div>
            <div class="proj-bg-color-detail-2">
                <div class="mx-auto p-2 w-50">
                    <div class="py-5">
                        <h1 class="proj-heading-profile">Details</h1>
                        <div class="float-end">
                            <btn class="btn proj-color-btn-unlike">
                                <i class="fa fa-minus"></i>
                                Unlike
                            </btn>
                            <btn class="btn proj-color-btn-like">
                                <i class="fa fa-plus"></i>
                                Like
                            </btn>
                        </div>
                        <div class="py-2">
                            <h3>Name</h3>
                            <ul class="list-group">
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">[hotel search data name]</li>
                            </ul>
                        </div>
                        <div class="py-2">
                            <h3 class="proj-heading-profile">Location <i class="fa fa-building proj-color-fa-building"></i></h3>
                            <ul class="list-group">
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">City: [hotel search data cityCode]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Country: [hotel search data countryCode]</li>
                            </ul>
                        </div>
                        <div class="py-2">
                            <h3 class="proj-heading-profile">Reviews <i class="fa fa-newspaper proj-color-fa-newspaper"></i></h3>
                            <ul class="list-group">
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Number of Reviews: [hotel reviews data numberOfReviews]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Number of Ratings: [hotel reviews data numberOfRatings]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul">Overall Rating: [hotel reviews data overallRating]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Service: [hotel reviews data sentiments service]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Facilities: [hotel reviews data sentiments facilities]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Value for Money: [hotel reviews data sentiments valueForMoney]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Location: [hotel reviews data sentiments location]</li>
                                <li class="list-group-item proj-bg-color-ul proj-font-ul proj-indent-module">Points of Interest: [hotel reviews data sentiments pointsOfInterest]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchHotel;