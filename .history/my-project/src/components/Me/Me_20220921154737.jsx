import React from 'react'

import '../Me/Me.css'

import me from '../../assets/img/me1.jpg'

import {Link } from 'react-scroll'

function Me() {
  return (
    <>  
    <div className='container-fluid' id='about'>
      <div className='row justify-content-center m-hero-me align-items-center'>
        <div className='col-12 col-sm-7 col-md-5'>
          <div className="card">
            <div className='row justify-content-center'>
              <div className='col-4 m-0'>
                <img src={ me } alt='Alan Naranjo' className='img-fluid'/>
              </div>
              <div className='col-8 p-0 m-0'>
                <h3 className="card-title">Developer Front-end</h3>
                <p>Soy un desarrollador nato en el front-end me gusta los diseños y programacion en este mundo comence desde los 15 años</p>
                  <a href='·'>Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-7 col-md-5 card-skills'>
          <div className='row'>
            <div className='col-6'>
            <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      HTML5
                  </h4>
                  <span class="small text-muted span-description">Lenguaje de marcado</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      CSS3
                  </h4>
                  <span class="small text-muted span-description">Lenguaje de diseño gráfico</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    Bootstrap v5.0
                  </h4>
                  <span class="small text-muted span-description">CSS3, Sitios mobile first</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    Tailwind CSS
                  </h4>
                  <span class="small text-muted span-description">CSS3, Diseño Web </span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    SASS
                  </h4>
                  <span class="small text-muted span-description">CSS3, Preprocesador </span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    BEM
                  </h4>
                  <span class="small text-muted span-description">CSS3, Medotologia 'HTML' </span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    GIT,  Gitub, Gitlab
                  </h4>
                  <span class="small text-muted span-description">Control de versionamientos</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
            </div>
            <div className='col-6'>
            <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    JavaScript
                  </h4>
                  <span class="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    React JS
                  </h4>
                  <span class="small text-muted"> Biblioteca Javascript</span>
                  </div>
                  <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9TyeVFxuRDxuNMx+T5/f7y+/34/f635vPu+fxUyuV10unm9vuw5PJizeeT2+3Y8fjL7fa/6fSd3u+A1euH1+zc8/mo4fCY3O7G6/WC1uvQ7/e75/NgzOeP2e1r0OjKlAWYAAAP70lEQVR4nO1daXuqOhAuIaisoiCIC/z/f3kBmeyB0JOU9j68X84itRkymX0mX187duzYsWPHjh07duzYsWPHjh07duzYsWNbJK/i9mjry3HrhbhBWHs+HoH88rn1auwjvCHsEWCUVVuvyC6CwmfoG2n0060XZRN5JNA3wL9tvSx7qH2ZvmEb460XZglBiZQE9iQ+tl6bFRzerITBCDESBxVbr84CQo8ShP2svuTPApP/Qtet1/fPCDGzY3H++c9jS/gWhduu75/B7CCOGC3/AhL/urQ5UgJRG7CfXEG8+n+bTzNCoP8SPkrJLm6yMksoKYG59kNcb7AySyiIPMEKI/QI5OPDzy/NDi6UwET1+RX98U0MqZBREkhPKQrUn/92dEAh0vmC+SRP8elHF2YLNfAo0q8fXkL2g+uyhpwog7P+ocu0if5f9PgjILAzeAr/QU/xDofQnw06nf6srKnIIWxmnwOduPDYLwS4hLhdePD2eRCXP7IsAxyqZ9M0l2eezDIfsTmjpS8EqwD/AjYNnkXsIYCPvK5NL2rn7gB+g1YTUmDjJx2jajHCfLxsiOwir6xlk/NmyqM9WryoU34CVYwU0cCJTt+7vbi9JGLGhPWATRf52SkKLX1AJcpqanuCpWIUgzlOFG4azYh1wUCeyO708YKeIDxmdT3B9D62DEnF8xvI8ms8qDXiMZglJurpIBqcWUeoEU/GBDWRyKtPsIWGlhgYsJtZ3xUNyPecGMW3c1Gc27jrFYeSTPKfpgcrgC3fKqdIvLyeBzmRechPbearyRwev6/8DVtpxCdR3rHqWB2edafZS+MtKaaDuFGyDZQ30m/J4RpjWZ1Exn77FK7ZyoMC62TeMj42pbSTyJTGZFNRA5EUf1FsBK9OzPIiT4wCqwHCdxNRc1rj3FR3kVdRZiI+suktaiJybjGt2TQY9pSsH9Qtr3s66+jyj4v9FqbIO5Jj8koozB/st0vcV697jXYBuspMe1OngqNxJpw4YnIvzDWoTayj8AyU3XihM187EzTTw++4yyIv6uG9s/hxr0/PxLnrv4pCCCvhx1fC04iF5OEHYf4qHr35R3OoTD58qp1C2S19unSspoNlJuYgrzs6FVXM04jZaFqQNHU5WrY6o4/9SYSi+9PVZt7W2IyT24Qn1f3MOMmK4o/7GDZF7GvMdj2ZyC9fTogEm9HEPU0m6wARPX/1eFZ9JacbXksc/XHUOtCYoPFNyl6mt+H59F0L1WzY/x5xlMiHdRon99SoYAJyEFzULHwYhEDW0LioXVfiADbj8qNgworBiypbsX4WajGEsWXTB2zG5ZhLy8uZCclpNswzFoGBC4pPYXgYEYZJ3rzqc6yKJPh2K8Vg3YupdghGsI5smGrc44k2nN3qJg+J2aaQZ8f8dX4LX4Ks1vu9pl++GBm8iHHP4BrryfN7RX4hBku64OUnp9JnfWxk01kO4XQt2RWQRJpk0pgF0PJmx6u21zKjHBvW/UQ2qzdAQi4Z/rCFA6cd0mw+So4z7oVBHGN+3RUTmTaMxRqhVgoQCU+aJXuWCrWHsR8xldCYcwabicIlEUJrqQ3j6UYAj0hXEzMB3PuujuTt68nr6oqvFWZrZ8F9Ws4/kW+wWdsw6YsF741SI5GHcHmd6rpebHlwTA7jxAAmgX1w0GwWbdbwnXOGb6UuVR/Iay/MD4YZw6kRsEW+Ip4I6tVibQORpnOyJlUGhXvypPDHGTGfT4cRKDTRcyGcGotsSoySmWc6mUKM4kb1nhskSf01FELoyGZUBwqX9Bm+YyES2EvOWqdBE0amfppKgEKjmGW6rDxXA8qbNArjKKWIMbrN8RArU0flv2oPwTywaZ3CIVOW9QSFWMDgR6elklgmJ4mzwzoKXewhJC9U1QQnib7YRARcqAmGcbhGloK+sJuqAoUhidOGD8X09N0NnfCE6VLwYFuMEt2Zi3RjQIwlTjhWmaAFo9RcSQWM3wga16SmxtgVWAei9RnmP9wkAbPuaNzE+IZR0Ds10F3fANlE+uZS2fxcyzi1QKLRG4JnbddQwZsDlZW/FQGm1dV3J+EUG1B4dWDSfED2aTC0gruYDB0XuN4YbvhKFgPxCLrZfpEYaVPyegeQD/RG4H2otyC81Ofb7Z4qE3Q5SyJeThlDWaeLFg2wPHF75lbVm5Yz5SJB7+2jT5bFx2eFJqnY5r3FQuGQuIcO2mxobhCz9N3CryPIbzlWW/v80w9ZxLOKcdGYBg1j1WQjaOWjh7KB9cAikczWMJP0AZIZkelQXBIfL1Lc46So4ShSiKdzo7NIclU0CslS/si08M0GmKAsxUOOiosEwYfOk3J4TBQK25Mr9ImaxID51jmjj9g+ripvuE3ENHEdKd9/oiZQGeuM6NdivTFGmhlN6ybW4skRSI86lK0LBT+ZgkWVr6LfQ8a8xW+d2UCaGV1VNHBjEVh1BNz45h/XJ9UkJgs59aOJhBL7xxWPCmYyc16UguYwF/IWwyH8iVXHMqgQWC5A+w6OYqSJeZGQneLkmzL2pttEXoQpyyBpsZWb/qFEnkxCt0xp0czQ50lZB/F1yMqA9tu6GTPBWFY0oUR0t6qbINEEiOFbeHEKGQGqFgVhyTQUO+mPot/f81dCZOS0EaAVuDz4db4gQfBCYjjJmrPWkPdlMyHDrJbJaT1YPfdRD5Bz4H63FD8VwPs+kzpEx7tSXqb0N2YuSmpSynAfXX3ll6EUpbcFChH7cEATc0SpM9x4pwR6LsxRxg0HKUZM8DG+eVeJ0nKBQp/dC7YKmp4BOKolQ6ALPfGi30/HItA29IIcIr78dYlCLnEEfD5s24G+hFHaHKhpNGfQfR8NcwTo91MDtReo8DfOZFZ4WjzYh7m6q4o75qwUd7KD1NjgawtyRv/CX7gjMqvwRbEEfP6xdOgxjxkO8nDkYngG1WpikIlhXviT+1yu9+Yp5MQS8Pl0CqhA7dgEjgshE9C6ACmKdhdIEAyxYJ5C3vKCsiuggfYh0R9wM4ioU4huAkGWiEmVeXXBCRposSQ6UgomqLxmG7gzB0IB3v8TQ0MaB396+Kx4lHmNIo8vVcJ/E6SlS+OPHfigqWgsz9Xr8UkVEKWMrcoJKozduPQMq2jOeMIuQ/JpZmxvpLS7GYV6eLAhyMzRBCIaFNHGhlhOlOOAmlGJMk9APpBs7JWLsbpqwiCqfq5Vh3E6FHVmGmGDPX5PSNXm9O+Q76t21ZVI4nvzDidNZuBM5mXlPEjJ9ppqjUCc1VIDnJtmC+KTLvhjlBVVRpWoNIf1Spqbq7y8KIIJTlQhVHcvR32KWbvxKZUxyLHSlgZBklh1dn0XLW2whcuKiBGZWBWSTyNSJ4yRf1aIRXB/g0PLMSiiCtcGSTzAyjCITFYsIyrm6vUSt8g+lfePq0rsQ6z0nWJeCV7oHCb7uUJSXLJciMvbLhqGCsIk1BnORB5z/IxuAfPdyLpGhJyuQVzrwguT9faV1Fg7/OL3hxnAy7RelQC1ogY9FmyY6vMzazlKbjfBxOYhdpVtjQGV3SaRu5e4BWjdAI9QUih+TI2otSM2TAHhS5NWc5hGxrhyq2K2YthRaP4GYWO5zRvS8ibnG2KJbAmXwrxR4yCVNYqZfChttbuJwDhGSSzg6NeTUYyeUTNE1SLRHiikdwNK0WrCaVLiZq+NNppzZSOLDZnBS+w5wX6roAI0hlVxWhk3P3xxrfQJS+J8hii5iy1DWNcfSupLLEaiwNg3EorssAAmequwsAmCppOKNNBNJ0rIJlr0ohJVqkUHfhwCW7/tqWMP1VnR8TXnhMJrszkxGmSpiYQWBj6w2XvF9RVJ/VZ2fCHpSQrS9We/v8LIMRNHWjzZZoqSy4Ulqcyd0/bMVrBHJg+tAynNN7DAUoFCLiGOI8KpVZ3pm9TnRS/xA+zZ38SSMiBR0f3JxllGmXq8tKo2dYzAJp1fO2m2NhvnYwQSQ0Ll0ns7yRR+FYynjro0Rgrm7MVNfYBxBgsyrVxxagxBghiDnT+fV77K4VyumcJTdZxjjMpBesI/zYa7WHUT2awWLuZkqrr7M5xrwcd+lo5rBUNvySIjI+tsVtK0zFnCPadpiVT0Rh7y07nTkxcVYLXezJiUPmh1siIX6+y56n1vlFSCiTcascO8mTjST/bg+xEDY2sFwtN2q9dbJK4O4a6tr3nInQaItWX3MhunlugTMhi3nNImfQWLbgMZcWrXS3ypGpbHi36w18WPHrcyjjP6mZa06QFR6a0wLCC1YbmkLdEPZsXzMz41P8RzI9SYmExmhXY16zVtjdqKXEEU9woQe5MOiV+YFKWDTnJQ1NYszEaYJQ6hMm14Gkt65uA5E3MTon9OameTc6TqAFqgDqHsfh3lQsCJLOwXkwXRrHEZoB7X1Z07eRHpB7HKG4eiNs0Z1hN6iKbjaNIgTgEUuruQJmyKDs8OH+s/9aNenTSKGXJ8J/Q4ERO0jGFOAn7U8UTs8DkMkIsw9pHv++PoeTI1Bsf5zHi8pOPEMoquMPzBMIaW/QyFgGHGUVJVeZ5XSXg102ovfvNJxs3QrX3/LIUcCLstPKduWVTm4xSAHd/iYigQc8uuTSLP5jctanYtS+cBZ8sgzv2Uetk6swz2c00Y3jrAvDQai3/1xIIu/fgMBmC1bTMtulhnM57EET3Y764LhpuLSM0KvMxdhBFBKoqbYQhRM0ckGbqzzQURZLqQ8U8oCogx8uNUc5JDkrrY6LbLYK17KpePftaPfe/BmXsjwjvt0tnqKppsjaj5YmoTlEE434vvp0uVDHi+zoxv46ZfxgQg6AzjRDRzL6XYgMzBxh3Am/uWYxgrAD1OhnEiqB3tbe7gpctkKLDhrV7JqoNIr9QbDfXq7JkR6ap92wiwZCNtRS6hISu+tKqwPw+87ZW6a65OI31oXNfw8y6OKOXpY6MfW4AEPpdb52hZp2iQJmMGR53kiB11pxuDTMFbNqPLWeVdnVqIJIzRhEF5+PHpF1zcPbWeLLuz9KZqvVTqtWB9b8s4jsu2biyOKf0XkAFEhha0o9EkDkGGsS8IPFoa9jPrsggoSJ23q4gc3f6uw9UgtQ1zSp84IRvesPZtwJS4ubUfqfz/uYXZQ7nso2abO0H/BFIHqi33ow3gm9wm8+8gxbyaTWRaX392YdYA1Rsa45TpHvoFFsr3ABQoTTda0Pcnrxj/gI4Akg0bWiSlqFf8OyBsKBnVNEf6FzUhBYhTsfGamVG+VTjQFojVyU1BOjEDgze7S9USyGXc5GYnPhfjZrjMj4IZE4KH4rWqfrNFin+fQK4rdrgxjYsv/fUzOEE/ZsD/01KUgeICgQ+Bm1ze6ATKWjgc/ZJwixWcJRKx5RuoNsdTvKKz3Cyj4gw1JI2GeOf5/8SgFM15KJ3yumKT+29/CkHwP9DwO3bs2LFjx44dO3bs2LFjx44dO3bs2LHj1+M/oEieqyaCAeUAAAAASUVORK5CYII=' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                    Angular JS
                  </h4>
                  <span class="small text-muted">Framework de JavaScript</span>
                  </div>
                  <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      Java
                  </h4>
                  <span class="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div class="col">
                    <div className='block'>
                      <div className='box'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' alt='Javascript'/>
                      </div>
                    </div>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      Kotlin
                  </h4>
                  <span class="small text-muted">En proceso...</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      C
                  </h4>
                  <span class="small text-muted">Lenguaje de Programacion</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
          <li class="list-group-item bg-transparent border-bottom py-3 px-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-auto">
                </div>
                <div class="col-auto px-0">
                  <h4 class="fs-6 mb-0">
                      MySQL
                  </h4>
                  <span class="small text-muted">Gestión de bases de datos</span>
                  </div>
                  <div class="col">
                      <span class="fs-6 fw-bolder">$1,834</span>
                  </div>
              </div>
          </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Me