import {
  AppRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
} from "@vkontakte/vkui";
import { RightMenu } from "./widgets/RightMenu";
import { Docs } from "./pages/Docs/Docs";

function App() {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol>
          <View activePanel="main">
            <Panel nav="main">
              <Docs />
            </Panel>
          </View>
        </SplitCol>
        <SplitCol maxWidth={320} style={{ marginLeft: 12 }}>
          <View activePanel="right">
            <Panel nav="right">
              <RightMenu />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
