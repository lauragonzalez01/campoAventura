import { SingleSpaState } from 'src/single-spa/single-spa-state';

export function getStateMock(): SingleSpaState {
  return {
    jump: {
      token: {
        access_token: 'abcde123'
      }
    },
    otp: {
      requestId: '1234',
      clientId: 'abcde',
      icon: 'icon',
      title: 'otp',
      step: {
        totalSubSteps: 5,
        number: 2,
        name: 'validation'
      }
    },
    cuentas: {
      requestId: '1235',
      termsUrl: 'url',
      termsSha: 'sha'
    },
    paths: {
      root: 'banca-virtual',
      base: 'banca-virtual/integracion',
      login: 'http://localhost/login',
      home: 'principal'
    }
  };
}

export class ContextServiceStub {
  context = {
    updateAppState(app: string, state: any) {}
  };

  state: SingleSpaState = getStateMock();

  getTokenCookie(): Promise<void> {
    return Promise.resolve();
  }

  revokeTokenCookie(): Promise<void> {
    return Promise.resolve();
  }

  goToHome(): Promise<void> {
    return Promise.resolve();
  }

  goToErrorPage(): Promise<void> {
    return Promise.resolve();
  }

  goToRestrictiveListsPage(): Promise<void> {
    return Promise.resolve();
  }

  goToYoungerPage(): Promise<void> {
    return Promise.resolve();
  }

  callOtp(): Promise<void> {
    return Promise.resolve();
  }
}
