import { Howler } from 'howler';
import { useEffect } from 'react';

import { useSoundStore } from '@/stores/sound';

import { Buttons } from '@/components/buttons';
import { Container } from '@/components/container';
import { MediaControls } from '@/components/media-controls';
import { SharedModal } from '@/components/modals/shared';
import { StoreConsumer } from '@/components/store-consumer';
import { Toolbar } from '@/components/toolbar';
import { SnackbarProvider } from '@/contexts/snackbar';

import { FADE_OUT } from '@/constants/events';
import { sounds } from '@/data/sounds';

import { subscribe } from '@/lib/event';
import { Donate } from '../donate';
import { Sounds } from '../sounds';

export function App() {
  const pause = useSoundStore(state => state.pause);
  const lock = useSoundStore(state => state.lock);
  const unlock = useSoundStore(state => state.unlock);

  useEffect(() => {
    const onChange = () => {
      const { ctx } = Howler;

      if (ctx && !document.hidden) {
        setTimeout(() => {
          ctx.resume();
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', onChange, false);

    return () => document.removeEventListener('visibilitychange', onChange);
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(FADE_OUT, (e: { duration: number }) => {
      lock();

      setTimeout(() => {
        pause();
        unlock();
      }, e.duration);
    });

    return unsubscribe;
  }, [pause, lock, unlock]);

  return (
    <SnackbarProvider>
      <StoreConsumer>
        <MediaControls />
        <Container>
          <div id="app" />
          <Buttons />
          <Sounds sounds={sounds} />
          <Donate />
        </Container>

        <Toolbar />
        <SharedModal />
      </StoreConsumer>
    </SnackbarProvider>
  );
}
