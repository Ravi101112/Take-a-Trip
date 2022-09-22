<div class="card" >
    <% for (let campground of campgrounds){%>
      <ul class="cards">
        <li>
          <a href="" class="card">
            <img src="<%=campground.images[0].url%>" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img class="card__thumb" src="<%=campground.images[0].url%>" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title"></h3>            
                  <span class="card__status"><%= campground.location%></span>
                </div>
              </div>
              <p class="card__description"><%= campground.description %></p>
        
            </div>
          </a>      
        </li>
        <li>

    </ul>
          
     
    <% }%>
</div>