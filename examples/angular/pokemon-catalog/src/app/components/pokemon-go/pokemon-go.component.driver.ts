import type { Type } from "@angular/core";
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressAngularComponentHelper } from "@shellygo/cypress-test-utils/angular";
import { MountConfig } from "cypress/angular";
import { PokemonGoComponent } from "./pokemon-go.component";

export class PokemonGoComponentDriver {
  private helper = new CypressHelper();
  private angularComponentHelper =
    new CypressAngularComponentHelper<PokemonGoComponent>();

  private componentProperties: Partial<PokemonGoComponent> = {};

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
  };

  given = {};

  when = {
    render: (
      type: Type<PokemonGoComponent>,
      config: MountConfig<PokemonGoComponent>
    ) => {
      this.angularComponentHelper.when.mount(type, config, {
        ...this.componentProperties
      });
      this.helper.when.wait(200);
    },
    typePokemonIndex: (value: string) =>
      this.helper.when.type("pokemon-index", value),
    clickGo: () => this.helper.when.click("go")
  };

  get = {
    selectedPokemon: () => this.helper.get.inputValue("pokemon-index"),
    selectedPokemonSpy: () => this.helper.get.spy("selectedPokemon"),
    isGoButtonDisabled: () => this.helper.get.isElementDisabled("go")
  };
}
