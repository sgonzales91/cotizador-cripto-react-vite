import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #FFF;
font-family: "Lato", sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`;

const Texto = styled.p`
font-size: 18px;
span{
    font-weight: 700;
    
}
`;

const Precio = styled.div`
font-size: 24px;
span{
    font-weight: 700;
}
`;

const Imagen = styled.img`
display: block;
width: 120px;
`;
const Resultado = ({resultado}) => {
const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://www.cryptocompare.com${IMAGEURL}`} alt="imagen"/>
        <div>
          <Texto>El precio es de: <Precio>{PRICE}</Precio></Texto>
          <Texto>Precio mas alto del dia fue de: <span>{HIGHDAY}</span></Texto>
          <Texto>Precio mas bajo del dia fue de: <span>{LOWDAY}</span></Texto>
          <Texto>Variacion ultimas 24hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado