import React from "react";
import styles from "./ParedeMedidas.module.css";

const ParedeMedidas = (props) => {

  
  const alturaMtHandler = (event) => {
    props.alturaMt(event.target.value);
  };
  const alturaCmHandler = (event) => {
    props.alturaCm(event.target.value);
  };
  const comprimentoMtHandler = (event) => {
    props.comprimentoMt(event.target.value);
  };
  const comprimentoCmHandler = (event) => {
    props.comprimentoCm(event.target.value);
  };

  return (
    <div>
      <div className={styles["parede-dropdown"]}>
        <label className={styles["parede-text"]}>Altura:</label>
        <div className={styles["parede-item"]}>
          <select onChange={alturaMtHandler} placeholder="Mt">
            <option value="0" disabled selected={true}>
              Mt
            </option>
            <option value="1">1m</option>
            <option value="2">2m</option>
            <option value="3">3m</option>
            <option value="4">4m</option>
            <option value="5">5m</option>
            <option value="6">6m</option>
            <option value="7">7m</option>
            <option value="8">8m</option>
            <option value="9">9m</option>
            <option value="10">10m</option>
            <option value="11">11m</option>
            <option value="12">12m</option>
            <option value="13">13m</option>
            <option value="14">14m</option>
            <option value="15">15m</option>
            <option value="16">16m</option>
            <option value="17">17m</option>
            <option value="18">18m</option>
            <option value="19">19m</option>
            <option value="20">20m</option>
            <option value="21">21m</option>
            <option value="22">22m</option>
            <option value="23">23m</option>
            <option value="24">24m</option>
            <option value="25">25m</option>
            <option value="26">26m</option>
            <option value="27">27m</option>
            <option value="28">28m</option>
            <option value="29">29m</option>
            <option value="30">30m</option>
            <option value="31">31m</option>
            <option value="32">32m</option>
            <option value="33">33m</option>
            <option value="34">34m</option>
            <option value="35">35m</option>
            <option value="36">36m</option>
            <option value="37">37m</option>
            <option value="38">38m</option>
            <option value="39">39m</option>
            <option value="40">40m</option>
            <option value="41">41m</option>
            <option value="42">42m</option>
            <option value="43">43m</option>
            <option value="44">44m</option>
            <option value="45">45m</option>
            <option value="46">46m</option>
            <option value="47">47m</option>
            <option value="48">48m</option>
            <option value="49">49m</option>
            <option value="50">50m</option>
          </select>
          <select onChange={alturaCmHandler} placeholder="Cm">
            <option defaultValue="0" disabled selected={true}>
              Cm
            </option>
            <option value=".00">.00cm</option>
            <option value=".01">.01cm</option>
            <option value=".02">.02cm</option>
            <option value=".03">.03cm</option>
            <option value=".04">.04cm</option>
            <option value=".05">.05cm</option>
            <option value=".06">.06cm</option>
            <option value=".07">.07cm</option>
            <option value=".08">.08cm</option>
            <option value=".09">.09cm</option>
            <option value=".10">.10cm</option>
            <option value=".11">.11cm</option>
            <option value=".12">.12cm</option>
            <option value=".13">.13cm</option>
            <option value=".14">.14cm</option>
            <option value=".15">.15cm</option>
            <option value=".16">.16cm</option>
            <option value=".17">.17cm</option>
            <option value=".18">.18cm</option>
            <option value=".19">.19cm</option>
            <option value=".20">.20cm</option>
            <option value=".21">.21cm</option>
            <option value=".22">.22cm</option>
            <option value=".23">.23cm</option>
            <option value=".24">.24cm</option>
            <option value=".25">.25cm</option>
            <option value=".26">.26cm</option>
            <option value=".27">.27cm</option>
            <option value=".28">.28cm</option>
            <option value=".29">.29cm</option>
            <option value=".30">.30cm</option>
            <option value=".31">.31cm</option>
            <option value=".32">.32cm</option>
            <option value=".33">.33cm</option>
            <option value=".34">.34cm</option>
            <option value=".35">.35cm</option>
            <option value=".36">.36cm</option>
            <option value=".37">.37cm</option>
            <option value=".38">.38cm</option>
            <option value=".39">.39cm</option>
            <option value=".40">.40cm</option>
            <option value=".41">.41cm</option>
            <option value=".42">.42cm</option>
            <option value=".43">.43cm</option>
            <option value=".44">.44cm</option>
            <option value=".45">.45cm</option>
            <option value=".46">.46cm</option>
            <option value=".47">.47cm</option>
            <option value=".48">.48cm</option>
            <option value=".49">.49cm</option>
            <option value=".50">.50cm</option>
            <option value=".51">.51cm</option>
            <option value=".52">.52cm</option>
            <option value=".53">.53cm</option>
            <option value=".54">.54cm</option>
            <option value=".55">.55cm</option>
            <option value=".56">.56cm</option>
            <option value=".57">.57cm</option>
            <option value=".58">.58cm</option>
            <option value=".59">.59cm</option>
            <option value=".60">.60cm</option>
            <option value=".61">.61cm</option>
            <option value=".62">.62cm</option>
            <option value=".63">.63cm</option>
            <option value=".64">.64cm</option>
            <option value=".65">.65cm</option>
            <option value=".66">.66cm</option>
            <option value=".67">.67cm</option>
            <option value=".68">.68cm</option>
            <option value=".69">.69cm</option>
            <option value=".70">.70cm</option>
            <option value=".71">.71cm</option>
            <option value=".72">.72cm</option>
            <option value=".73">.73cm</option>
            <option value=".74">.74cm</option>
            <option value=".75">.75cm</option>
            <option value=".76">.76cm</option>
            <option value=".77">.77cm</option>
            <option value=".78">.78cm</option>
            <option value=".79">.79cm</option>
            <option value=".80">.80cm</option>
            <option value=".81">.81cm</option>
            <option value=".82">.82cm</option>
            <option value=".83">.83cm</option>
            <option value=".84">.84cm</option>
            <option value=".85">.85cm</option>
            <option value=".86">.86cm</option>
            <option value=".87">.87cm</option>
            <option value=".88">.88cm</option>
            <option value=".89">.89cm</option>
            <option value=".90">.90cm</option>
            <option value=".91">.91cm</option>
            <option value=".92">.92cm</option>
            <option value=".93">.93cm</option>
            <option value=".94">.94cm</option>
            <option value=".95">.95cm</option>
            <option value=".96">.96cm</option>
            <option value=".97">.97cm</option>
            <option value=".98">.98cm</option>
            <option value=".99">.99cm</option>
          </select>
        </div>
      </div>
      <div className={styles["parede-dropdown"]}>
        <label className={styles["parede-text"]}>Comprimento:</label>
        <div className={styles["parede-item"]}>
          <select onChange={comprimentoMtHandler} placeholder="Mt">
            <option value="0" disabled selected={true}>
              Mt
            </option>
            <option value="1">1m</option>
            <option value="2">2m</option>
            <option value="3">3m</option>
            <option value="4">4m</option>
            <option value="5">5m</option>
            <option value="6">6m</option>
            <option value="7">7m</option>
            <option value="8">8m</option>
            <option value="9">9m</option>
            <option value="10">10m</option>
            <option value="11">11m</option>
            <option value="12">12m</option>
            <option value="13">13m</option>
            <option value="14">14m</option>
            <option value="15">15m</option>
            <option value="16">16m</option>
            <option value="17">17m</option>
            <option value="18">18m</option>
            <option value="19">19m</option>
            <option value="20">20m</option>
            <option value="21">21m</option>
            <option value="22">22m</option>
            <option value="23">23m</option>
            <option value="24">24m</option>
            <option value="25">25m</option>
            <option value="26">26m</option>
            <option value="27">27m</option>
            <option value="28">28m</option>
            <option value="29">29m</option>
            <option value="30">30m</option>
            <option value="31">31m</option>
            <option value="32">32m</option>
            <option value="33">33m</option>
            <option value="34">34m</option>
            <option value="35">35m</option>
            <option value="36">36m</option>
            <option value="37">37m</option>
            <option value="38">38m</option>
            <option value="39">39m</option>
            <option value="40">40m</option>
            <option value="41">41m</option>
            <option value="42">42m</option>
            <option value="43">43m</option>
            <option value="44">44m</option>
            <option value="45">45m</option>
            <option value="46">46m</option>
            <option value="47">47m</option>
            <option value="48">48m</option>
            <option value="49">49m</option>
            <option value="50">50m</option>
          </select>
          <select onChange={comprimentoCmHandler} placeholder="Cm">
            <option defaultValue="0" disabled selected={true}>
              Cm
            </option>
            <option value=".00">.00cm</option>
            <option value=".01">.01cm</option>
            <option value=".02">.02cm</option>
            <option value=".03">.03cm</option>
            <option value=".04">.04cm</option>
            <option value=".05">.05cm</option>
            <option value=".06">.06cm</option>
            <option value=".07">.07cm</option>
            <option value=".08">.08cm</option>
            <option value=".09">.09cm</option>
            <option value=".10">.10cm</option>
            <option value=".11">.11cm</option>
            <option value=".12">.12cm</option>
            <option value=".13">.13cm</option>
            <option value=".14">.14cm</option>
            <option value=".15">.15cm</option>
            <option value=".16">.16cm</option>
            <option value=".17">.17cm</option>
            <option value=".18">.18cm</option>
            <option value=".19">.19cm</option>
            <option value=".20">.20cm</option>
            <option value=".21">.21cm</option>
            <option value=".22">.22cm</option>
            <option value=".23">.23cm</option>
            <option value=".24">.24cm</option>
            <option value=".25">.25cm</option>
            <option value=".26">.26cm</option>
            <option value=".27">.27cm</option>
            <option value=".28">.28cm</option>
            <option value=".29">.29cm</option>
            <option value=".30">.30cm</option>
            <option value=".31">.31cm</option>
            <option value=".32">.32cm</option>
            <option value=".33">.33cm</option>
            <option value=".34">.34cm</option>
            <option value=".35">.35cm</option>
            <option value=".36">.36cm</option>
            <option value=".37">.37cm</option>
            <option value=".38">.38cm</option>
            <option value=".39">.39cm</option>
            <option value=".40">.40cm</option>
            <option value=".41">.41cm</option>
            <option value=".42">.42cm</option>
            <option value=".43">.43cm</option>
            <option value=".44">.44cm</option>
            <option value=".45">.45cm</option>
            <option value=".46">.46cm</option>
            <option value=".47">.47cm</option>
            <option value=".48">.48cm</option>
            <option value=".49">.49cm</option>
            <option value=".50">.50cm</option>
            <option value=".51">.51cm</option>
            <option value=".52">.52cm</option>
            <option value=".53">.53cm</option>
            <option value=".54">.54cm</option>
            <option value=".55">.55cm</option>
            <option value=".56">.56cm</option>
            <option value=".57">.57cm</option>
            <option value=".58">.58cm</option>
            <option value=".59">.59cm</option>
            <option value=".60">.60cm</option>
            <option value=".61">.61cm</option>
            <option value=".62">.62cm</option>
            <option value=".63">.63cm</option>
            <option value=".64">.64cm</option>
            <option value=".65">.65cm</option>
            <option value=".66">.66cm</option>
            <option value=".67">.67cm</option>
            <option value=".68">.68cm</option>
            <option value=".69">.69cm</option>
            <option value=".70">.70cm</option>
            <option value=".71">.71cm</option>
            <option value=".72">.72cm</option>
            <option value=".73">.73cm</option>
            <option value=".74">.74cm</option>
            <option value=".75">.75cm</option>
            <option value=".76">.76cm</option>
            <option value=".77">.77cm</option>
            <option value=".78">.78cm</option>
            <option value=".79">.79cm</option>
            <option value=".80">.80cm</option>
            <option value=".81">.81cm</option>
            <option value=".82">.82cm</option>
            <option value=".83">.83cm</option>
            <option value=".84">.84cm</option>
            <option value=".85">.85cm</option>
            <option value=".86">.86cm</option>
            <option value=".87">.87cm</option>
            <option value=".88">.88cm</option>
            <option value=".89">.89cm</option>
            <option value=".90">.90cm</option>
            <option value=".91">.91cm</option>
            <option value=".92">.92cm</option>
            <option value=".93">.93cm</option>
            <option value=".94">.94cm</option>
            <option value=".95">.95cm</option>
            <option value=".96">.96cm</option>
            <option value=".97">.97cm</option>
            <option value=".98">.98cm</option>
            <option value=".99">.99cm</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ParedeMedidas;
