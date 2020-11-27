<section class="section map">
  <div class="container">
    <div class="section-header">
      <h3>
        <span>¿Necesitas ayuda?</span>
      </h3>
    </div>
    
    <div class="section-body">
      <div class="row">
        <div class="col-4">
          <div class="map-searcher">
            <div class="map-searcher-header">
              <i class="icon icon-company"></i>
              <h3>Buscar sucursal</h3>
            </div>
            <form>
              <div class="map-searcher-body">
                <div class="form-group form-group--simple">
                  <label for="mapInputCP">C.P.</label>
                  <input type="text" class="form-control" id="mapInputCP" placeholder="Ingresa un código postal">
                </div>

                <div class="division">
                  <p>o por zona</p>
                </div>

                <div class="form-group form-group--simple">
                  <label for="mapSelectState">Estado <small>(opcional)</small></label>
                  <select class="form-control" id="mapSelectState">
                    <option default>Selecciona un estado</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div class="form-group form-group--simple">
                  <label for="mapSelectCity">Ciudad <small>(opcional)</small></label>
                  <select class="form-control" id="mapSelectCity">
                    <option default>Selecciona una ciudad</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>              
              </div>
              <div class="map-searcher-footer">
                <button class="btn btn-primary" type="submit">Buscar</button>
                <button class="btn btn-link">
                  <i class="icon icon-location"></i>
                  <span>Usar mi ubicación</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-8">
          <div class="gmap js-map"><div>
        </div>
      </div>
    </div>
  </div>
</section>