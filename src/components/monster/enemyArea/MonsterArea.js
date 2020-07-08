import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { CurentEnemy } from "../curentEnemy/CurentEnemy";
import { setMonsterId, setMonsterKilled } from "../store/actions";
import {
  pickUpDrop,
  characterReceiveDamage,
} from "../../character/store/actions";
import { AsideEnemy } from "./AsideEnemies";

const MonsterArea = ({
  setMonsterId,
  monsterId,
  monsters,
  monsterIsKilled,
  pickUpDrop,
  characterReceiveDamage,
  setMonsterKilled,
  characterPhysicalDamage,
}) => {
  const { monsterBarWrapper, asideMonsterWrapper } = styles;
  const [prevMonsterId, setPrevMonsterId] = useState(monsterId);
  const [nextMonsterId, setNextMonsterId] = useState(monsterId);

  useEffect(() => {
    monsterId > 0 && setPrevMonsterId(monsterId - 1);
    monsterId < monsters.length - 1 && setNextMonsterId(monsterId + 1);
  });

  return (
    <View style={monsterBarWrapper}>
      <View style={asideMonsterWrapper}>
        <AsideEnemy
          asideMonsterImage={monsters[prevMonsterId].monsterImage}
          setId={() => setMonsterId(prevMonsterId)}
        />
      </View>

      <CurentEnemy
        monster={monsters[monsterId]}
        setMonsterKilled={setMonsterKilled}
        monsterIsKilled={monsterIsKilled}
        pickUpDrop={pickUpDrop}
        characterReceiveDamage={characterReceiveDamage}
        characterPhysicalDamage={characterPhysicalDamage}
      />

      <View style={asideMonsterWrapper}>
        <AsideEnemy
          asideMonsterImage={monsters[nextMonsterId].monsterImage}
          setId={() => setMonsterId(nextMonsterId)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monsterBarWrapper: {
    flex: 7,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
  asideMonsterWrapper: {
    flex: 1,
    height: "18%",
    backgroundColor: "rgba(149, 161, 176, 0.5)",
    borderRadius: 20,
  },
});

const mapStateToProps = (state) => ({
  monsters: state.monster.monsters,
  monsterId: state.monster.monsterId,
  monsterIsKilled: state.monster.monsterIsKilled,
  characterPhysicalDamage: state.character.characterPhysicalDamage,
});

export default connect(mapStateToProps, {
  setMonsterId,
  setMonsterKilled,
  pickUpDrop,
  characterReceiveDamage,
})(MonsterArea);
