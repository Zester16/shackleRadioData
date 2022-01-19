const express = require("express");
const axios = require("axios");

const app = express()

let allStations =
{
	one_fm_913: { id: "one_fm_913", name: "One FM 913", country: "singapore", background: "white", fav: true, url: "https://22253.live.streamtheworld.com/ONE_FM_913.mp3", logo: "https://www.onefm.sg/wp-content/assets/3/img/NAV_01_Logo_913-new.svg", stream: null, streamType: false },
	money_fm_893: { id: "money_fm_893", name: "Money FM 893", country: "singapore", background: "white", fav: false, url: "https://22253.live.streamtheworld.com/MONEY_893.mp3", logo: "https://www.moneyfm893.sg/wp-content/assets/2/img/NAV_01_Logo_893.svg", stream: null, streamType: false },
	nrj_zurich_109: { id: "nrj_zurich_109", name: "Energy Zurich 109", country: "Swiss", background: "white", fav: false, url: "https://energyzuerich.ice.infomaniak.ch/energyzuerich-high.mp3", logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Logo_NRJ_2016.png", stream: null, streamType: false },
	q_fm_102: { id: "q_fm_102", name: "Dublins Q102", country: "Ireland", background: "white", fav: true, url: "https://wg.cdn.tibus.net/q102MP3128", logo: "https://mm.aiircdn.com/614/5d5fcba7241c4.png", stream: "https://www.q102.ie/radiofeed_request/?a=newer", streamType: true },
	wrs_fm: { id: "wrs_fm", name: "World Rasio Swiss", country: "Swiss", background: "white", fav: false, url: "https://streamingr.broadcastradio.com:10295/wrs", logo: "https://mm.aiircdn.com/45/581c75ebd31ac.png", stream: null, streamType: false },
	sunny_fm_102: { id: "sunny_fm_102", name: "Sunny FM", country: "Utah, USA", background: "white", fav: false, url: "https://ice10.securenetsystems.net/KCLS", logo: "https://mysunny1015.com/wp-content/uploads/2019/03/logo-kcls-sunny-1015-dark-light.png", stream: null, streamType: false },
	rosj_fm_96: { id: "rosj_fm_96", name: "Rock of St George Utah", country: "Utah, USA", background: "dark", fav: false, url: "https://ice41.securenetsystems.net/KCLSHD2", logo: "https://rockstgeorge.com/wp-content/uploads/2019/03/logo-96X-rock-dark-light.png", stream: null, streamType: false },
	mmm_fm_1049: { id: "mmm_fm_1049", name: "Triple M", country: "Melbourn, Australia", background: "dark", fav: false, url: "https://ic3ti.scahw.com.au/3mmm_128", logo: "https://myradio-img-prod.scalabs.com.au/api/assets/72191957-f81d-40ff-8543-15d8a8b5ca90/", stream: null, streamType: false },
	beat_fm_1025: { id: "beat_fm_1025", name: "Beat FM", country: "Jordan", background: "dark", fav: false, url: "https://securestreams2.autopo.st:1242/live", logo: "https://mybeat.fm/assets/images//logo.png", stream: null, streamType: false },
	mood_fm_jd: { id: "mood_fm_jd", name: "Mood FM", country: "Jordan", background: "dark", fav: false, url: "https://securestreams2.autopo.st:1241/live", logo: "https://www.mood.fm/assets/images/mood_fm.png", stream: null, streamType: false },
	breeze_fm_nz: { id: "breeze_fm_nz", name: "Breeze FM", country: "New Zealand", background: "white", fav: false, url: "https://tunein-icecast.mediaworks.nz/breeze_tauranga_128kbps", logo: "https://thebreeze.co.nz/design/clientlibs/assets/breeze/imgs/ui/logo-mobile.svg", stream: 'https://radio-api.mediaworks.nz/radio-api/v3/station/thebreeze/tauranga/web', streamType: false },
	b_fm_899: { id: "b_fm_899", name: "BFM 89.9 Business News", country: "Malaysia", background: "dark", fav: false, url: "https://22283.live.streamtheworld.com/BFMAAC.aac", logo: "https://www.bfm.my/themes/bfmmy/assets/images/bfm-logo.jpg", stream: null, streamType: false },
	edge_fm_1021: { id: "edge_fm_1021", name: "Edge FM 102.1", country: "Camada", background: "dark", fav: false, url: "https://corus.leanstream.co/CFNYFM", logo: "https://edge.ca/wp-content/uploads/sites/5/2021/02/hero_logo_380x170_edge.png", stream: null, streamType: false },
	rmf_maxxx_fm: { id: "rmf_maxxx_fm", name: "RMF MAXX FM", country: "Poland", background: "white", url: "https://rs9-krk2.rmfstream.pl/rmf_maxxx", logo: "https://www.rmfmaxxx.pl/assets-16/images/rmfmaxxx-logo.png", stream: null, streamType: false },
	rmf_fm_pl: { id: "rmf_fm_pl", name: "RMF FM", country: "Poland", background: "white", fav: false, url: "https://rs9-krk2.rmfstream.pl/rmf_fm", logo: "https://www.rmf.fm//2018/img/logo-bez-x2.png", stream: null, streamType: false },
	vrock_fm_ch: { id: "vrock_fm_ch", name: "Virgin Rock", country: "Switzerland", background: "virgin", fav: false, url: "https://icecast.argovia.ch/vrock", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/VirginRadio.png", stream: "https://www.virginradiorock.ch/api/pub/gql/virginrock/AudioLiveData/e0c0de0fa34937485951a3a3c1fb2aaffc94311e", streamType: true },
	bloomberg_fm: { id: "bloomberg_fm", name: "Bloomberg Radio", country: "USA", background: "white", fav: true, url: "https://24423.live.streamtheworld.com/WBBRAMAAC48.aac", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bloomberg_Radio.png", stream: null, streamType: false },
	bloomberg_fm_backup: { id: "bloomberg_fm_backup", name: "Bloomberg Backup", country: "USA", background: "white", url: "https://18843.live.streamtheworld.com/WBBRAMAAC48.aac", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bloomberg_Radio.png", stream: null, streamType: false },
	max_fm_1039: { id: "max_fm_1039", name: "Max FM 103.9", country: "Canada", background: "dark", url: "https://mbsradio.leanstream.co/CFQMFM-MP3", logo: "https://1039maxfm.com/wp-content/uploads/sites/8/2021/02/MAX103-color.png", stream: null, streamType: false },
	radio_bern_1: { id: "radio_bern_1", name: "Radio Bern 1", country: "Swiss", background: "white", fav: true, url: "https://mp3.radiobern1.ch/radiobern1128k", logo: "svg_and_images/radiobern1.png", stream: "https://www.radiobern1.ch/api/pub/gql/radiobern/AudioLiveData/e0c0de0fa34937485951a3a3c1fb2aaffc94311e", streamType: true },
	radio_klassik: { id: "radio_klassik", name: "Radio Klassik", country: "Germany", background: "white", fav: true, url: "https://edge52.streams.klassikradio.de/klassikradio-deutschland", logo: "https://www.klassikradio.de//_nuxt/img/72ebcae.png", stream: "https://api.iris-next.radiorepo.io/stream-service/696fff20-62da-474f-a092-4898d41776f3?", streamType: false },
	radio_rundfunk_914: { id: "radio_rundfunk_914", name: "Berliner Rundfunk 91.4", country: "Germany", background: "white", fav: false, url: "https://stream.berliner-rundfunk.de/brf/mp3-128/internetradio", logo: "https://www.berliner-rundfunk.de//_nuxt/3e020671c5416fa80e6b805f4364f376.svg", stream: "https://top-stream-service.loverad.io/v1/br?", streamType: false },
	vradio_lebanon_fm: { id: "vradio_lebanon_fm", name: "Lebanon 89.5", country: "Lebanon", background: "virgin", fav: false, url: "http://node-26.zeno.fm/dwxw3p9vea0uv?rj-ttl=5&rj-tok=AAABdfuFcQ4AHao1lT3WKsmr6g", logo: "https://virginradiolb.com/assets/themes/TriTheme/images/logo.png", stream: null, streamType: false },
	vradio_all_stars: { id: "vradio_all_stars", name: "All Stars Lebanon 89.7", country: "Lebanon", background: "virgin", fav: false, url: "http://node-25.zeno.fm/h66yxnapga0uv?rj-ttl=5&rj-tok=AAABfHPP9RIA5LSgnhKkmu7Wmw", logo: "https://virginradiolb.com/assets/themes/TriTheme/images/logo-stars.png", stream: null, streamType: false },
	vradio_uk_fm: { id: "vradio_uk_fm", name: "Virgin UK", country: "UK", background: "virgin", fav: false, url: "https://radio.virginradio.co.uk/stream", logo: "https://virginradio.co.uk/virgin/assets/virginradiouk-thumbnail.png", stream: null, streamType: false },
	jazz_fm_rm: { id: "jazz_fm_rm", name: "Jazz FM", country: "Romania", background: "white", fav: false, url: "https://s4.radio.co/s1e25bf273/listen", logo: "https://jazzfm.ro/assets/images/assets_logo.svg", stream: "https://jazzfm.ro/pn2.php", streamType: true },
	classic_praha: { id: "classic_praha", name: "Classic Praha", country: "Chez Republic", background: "white", fav: false, url: "https://icecast8.play.cz/classic128.mp3", logo: "https://www.radio.net/images/broadcasts/f9/e8/12702/c300.png", stream: null, streamType: false },
	mujrozhals_jazz: { id: "mujrozhals_jazz", name: "ČRo Jazz", country: "Chez Republic", background: "white", fav: false, url: "https://rozhlas.stream/jazz_mp3_128.mp3", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/CRo_Jazz_logo.png", stream: null, streamType: false },
	radio_klassik_backup: { id: "radio_klassik_backup", name: "Radio Klassik BKP", country: "Germany", background: "white", fav: false, url: "https://edge02.streams.klassikradio.de/klassikradio-deutschland", logo: "https://www.klassikradio.de//_nuxt/img/72ebcae.png", stream: "https://api.iris-next.radiorepo.io/stream-service/696fff20-62da-474f-a092-4898d41776f3?", streamType: false },
}
app.get("/", (req, rep) => {
	rep.send("HI")
})
app.get("/:id", async (req, rep) => {

	const { id } = req.params
	console.log(id);
	let station = allStations[id];

	try {
		let response = await axios.get(station.stream)
		console.log(response.status)
		if (response.status == 200) {
			rep.set({
				'Content-Type': 'text/plain',
				'Access-Control-Allow-Origin': '*'
			})
			rep.send(response.data)
		}
		else {
			rep.status(404)
		}

	}

	catch (error) {
		rep.status(404).send(error)
	}






})



app.listen(3000, () => {

	console.log("Port 3000 for RS up and running");

})