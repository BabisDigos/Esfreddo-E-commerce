import Spinner from "@components/loader/Spinner";
import MapMarker from "./MapMarker";
import { useStores } from "@hooks/useStores";
import { useMapContext } from "./MapProvider";

const MapComponent = () => {
  const {
    initMap,
    prev: { isLoaded },
  } = useMapContext();
  const { data: stores } = useStores();

  return (
    <>
      {!isLoaded && <Spinner />}
      <div className="absolute h-screen w-screen overflow-hidden" ref={initMap} />

      {stores && stores.map((store) => <MapMarker key={store.id} {...store} />)}
    </>
  );
};

export default MapComponent;
