# Haeansim

Open `index.html` in a browser. No server or installation is required.

## Included

- 부산 해수욕장 선택: 광안리, 해운대, 송정, 송도, 다대포, 일광, 임랑
- 기상청 단기예보 초단기실황 API 연결 화면
- 이용자 입력 없이 자동으로 호출되는 기상청 초단기실황
- API failure fallback sample data
- Safety guide, emergency calls, partner rental map pins and points prototype

## API key

The static prototype contains the supplied API key so visitors do not enter it. Anyone can inspect a key embedded in GitHub Pages; rotate the exposed key and use a server-side proxy for production.

The short-term forecast API provides temperature, wind speed, humidity, and rainfall. Wave height, sea temperature, rip currents and jellyfish need dedicated marine data APIs.
