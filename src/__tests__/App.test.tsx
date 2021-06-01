import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('App renders the map', () => {
    render(<App />);
    expect(screen.getAllByTestId('app-container')).toMatchInlineSnapshot(`
        Array [
          <div
            data-testid="app-container"
          >
            <div
              data-testid="map-container"
            >
              <div
                class="map leaflet-container leaflet-grab leaflet-touch-drag"
                style="position: relative;"
                tabindex="0"
              >
                <div
                  class="leaflet-pane leaflet-map-pane"
                  style="left: 0px; top: 0px;"
                >
                  <div
                    class="leaflet-pane leaflet-tile-pane"
                  >
                    <div
                      class="leaflet-layer "
                      style="z-index: 1;"
                    >
                      <div
                        class="leaflet-tile-container leaflet-zoom-animated"
                        style="z-index: 18; left: 0px; top: 0px;"
                      >
                        <img
                          alt=""
                          class="leaflet-tile"
                          role="presentation"
                          src="http://mt1.google.com/vt/lyrs=m&x=3&y=3&z=3"
                          style="width: 256px; height: 256px; left: -256px; top: -256px;"
                        />
                        <img
                          alt=""
                          class="leaflet-tile"
                          role="presentation"
                          src="http://mt1.google.com/vt/lyrs=m&x=4&y=3&z=3"
                          style="width: 256px; height: 256px; left: 0px; top: -256px;"
                        />
                        <img
                          alt=""
                          class="leaflet-tile"
                          role="presentation"
                          src="http://mt1.google.com/vt/lyrs=m&x=3&y=4&z=3"
                          style="width: 256px; height: 256px; left: -256px; top: 0px;"
                        />
                        <img
                          alt=""
                          class="leaflet-tile"
                          role="presentation"
                          src="http://mt1.google.com/vt/lyrs=m&x=4&y=4&z=3"
                          style="width: 256px; height: 256px; left: 0px; top: 0px;"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="leaflet-pane leaflet-shadow-pane"
                  />
                  <div
                    class="leaflet-pane leaflet-overlay-pane"
                  />
                  <div
                    class="leaflet-pane leaflet-marker-pane"
                  />
                  <div
                    class="leaflet-pane leaflet-tooltip-pane"
                  />
                  <div
                    class="leaflet-pane leaflet-popup-pane"
                  />
                </div>
                <div
                  class="leaflet-control-container"
                >
                  <div
                    class="leaflet-top leaflet-left"
                  >
                    <div
                      class="leaflet-control-zoom leaflet-bar leaflet-control"
                    >
                      <a
                        aria-label="Zoom in"
                        class="leaflet-control-zoom-in"
                        href="#"
                        role="button"
                        title="Zoom in"
                      >
                        +
                      </a>
                      <a
                        aria-label="Zoom out"
                        class="leaflet-control-zoom-out"
                        href="#"
                        role="button"
                        title="Zoom out"
                      >
                        −
                      </a>
                    </div>
                  </div>
                  <div
                    class="leaflet-top leaflet-right"
                  >
                    <div
                      aria-haspopup="true"
                      class="leaflet-control-layers leaflet-control"
                    >
                      <a
                        class="leaflet-control-layers-toggle"
                        href="#"
                        title="Layers"
                      />
                      <section
                        class="leaflet-control-layers-list"
                      >
                        <div
                          class="leaflet-control-layers-base"
                        >
                          <label>
                            <div>
                              <input
                                checked="checked"
                                class="leaflet-control-layers-selector"
                                name="leaflet-base-layers_33"
                                type="radio"
                              />
                              <span>
                                 GoogleStreets
                              </span>
                            </div>
                          </label>
                          <label>
                            <div>
                              <input
                                class="leaflet-control-layers-selector"
                                name="leaflet-base-layers_33"
                                type="radio"
                              />
                              <span>
                                 GoogleSatellite
                              </span>
                            </div>
                          </label>
                        </div>
                        <div
                          class="leaflet-control-layers-separator"
                          style="display: none;"
                        />
                        <div
                          class="leaflet-control-layers-overlays"
                        />
                      </section>
                    </div>
                  </div>
                  <div
                    class="leaflet-bottom leaflet-left"
                  >
                    <div
                      class="leaflet-control-scale leaflet-control"
                    >
                      <div
                        class="leaflet-control-scale-line"
                        style="width: 51px;"
                      >
                        1000 km
                      </div>
                      <div
                        class="leaflet-control-scale-line"
                        style="width: 82px;"
                      >
                        1000 mi
                      </div>
                    </div>
                  </div>
                  <div
                    class="leaflet-bottom leaflet-right"
                  >
                    <div
                      class="info legend leaflet-control"
                    >
                      <h4>
                        Magnitude Color Code
                      </h4>
                      <br />
                      <i
                        style="background:#056FF7"
                      />
                      0–1
                      <br />
                      <i
                        style="background:#7D3C98"
                      />
                      1–2
                      <br />
                      <i
                        style="background:#00B800"
                      />
                      2–3
                      <br />
                      <i
                        style="background:#FFCF00"
                      />
                      3–5
                      <br />
                      <i
                        style="background:#FF9000"
                      />
                      5–7
                      <br />
                      <i
                        style="background:#FF0000"
                      />
                      7+
                    </div>
                    <div
                      class="leaflet-control-attribution leaflet-control"
                    >
                      <a
                        href="https://leafletjs.com"
                        title="A JS library for interactive maps"
                      >
                        Leaflet
                      </a>
                       | © Google
                    </div>
                  </div>
                </div>
                <div
                  class="loader"
                  data-testid="spinner"
                >
                  <img
                    alt="loader"
                    src="loader.gif"
                  />
                </div>
              </div>
            </div>
          </div>,
        ]
    `);
});
