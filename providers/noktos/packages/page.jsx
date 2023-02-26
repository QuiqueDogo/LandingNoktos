import {memo, useState} from "react";
import styles from "./styles.module.scss";
import Info from "./components/Info/Info";
import Title from "components/Title/Title";
import Prices from "./components/Prices/Prices";
import Detail from "./components/Detail/Detail";
import HomeLayout from "components/layouts/HomeLayout/HomeLayout";

const Content = () => {
  const [numberOfNoktos, setNumberOfNoktos] = useState("")
  return <HomeLayout>
        <section className={styles.NoktosPackages}>
          <Title title="Selecciona tu paquete"/>
          <div>
            <div>
              <Prices/>
              <div>
                <Info
                    numberOfNoktos={numberOfNoktos}
                    setNumberOfNoktos={setNumberOfNoktos}/>
                <Detail
                    numberOfNoktos={numberOfNoktos}/>
              </div>
            </div>
      </div>
    </section>
  </HomeLayout>
}

export default memo(Content);
