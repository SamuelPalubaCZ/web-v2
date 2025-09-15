'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/elements/card';
import { Button } from '@/components/elements/button';
import { Input, SearchInput, PasswordInput } from '@/components/elements/input';
import { Toggle } from '@/components/elements/toggle';
import { Title, Subtitle, SectionTitle } from '@/components/elements/title';

interface ShowcaseProps {
  className?: string;
}

const Showcase = React.forwardRef<HTMLDivElement, ShowcaseProps>(
  ({ className }, ref) => {
    const [toggleStates, setToggleStates] = React.useState({
      toggle1: false,
      toggle2: true,
      toggle3: false,
    });

    const handleToggleChange = (key: string) => {
      setToggleStates(prev => ({
        ...prev,
        [key]: !prev[key as keyof typeof prev]
      }));
    };

    return (
      <div ref={ref} className={cn('py-20', className)}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Title 
              variant="gradient" 
              size="4xl" 
              align="center" 
              className="mb-4"
            >
              Component Showcase
            </Title>
            <Subtitle 
              size="lg" 
              align="center" 
              className="max-w-2xl mx-auto"
            >
              Explore our comprehensive collection of morphism-inspired UI components, 
              designed with ThinkPad's iconic aesthetic in mind.
            </Subtitle>
          </div>

          {/* Buttons Section */}
          <section className="mb-20">
            <SectionTitle
              title="Buttons"
              subtitle="Interactive buttons with morphism effects and multiple variants"
              className="mb-8"
            />
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Primary Buttons */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Primary</h4>
                  <div className="space-y-3">
                    <Button size="sm">Small Button</Button>
                    <Button>Default Button</Button>
                    <Button size="lg">Large Button</Button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Secondary</h4>
                  <div className="space-y-3">
                    <Button variant="secondary" size="sm">Small Secondary</Button>
                    <Button variant="secondary">Default Secondary</Button>
                    <Button variant="secondary" size="lg">Large Secondary</Button>
                  </div>
                </div>

                {/* Other Variants */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Variants</h4>
                  <div className="space-y-3">
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>

                {/* Icon Buttons */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Icon Buttons</h4>
                  <div className="flex space-x-3">
                    <Button size="icon-sm" aria-label="Small icon">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </Button>
                    <Button size="icon" aria-label="Default icon">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </Button>
                    <Button size="icon-lg" aria-label="Large icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </Button>
                  </div>
                </div>

                {/* Loading States */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">States</h4>
                  <div className="space-y-3">
                    <Button disabled>Disabled</Button>
                    <Button className="relative">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Inputs Section */}
          <section className="mb-20">
            <SectionTitle
              title="Input Fields"
              subtitle="Form inputs with morphism styling and various configurations"
              className="mb-8"
            />
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Default Input</label>
                    <Input placeholder="Enter your text..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Search Input</label>
                    <SearchInput placeholder="Search components..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password Input</label>
                    <PasswordInput placeholder="Enter password..." />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Small Input</label>
                    <Input size="sm" placeholder="Small input..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Large Input</label>
                    <Input size="lg" placeholder="Large input..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Disabled Input</label>
                    <Input disabled placeholder="Disabled input..." />
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Toggles Section */}
          <section className="mb-20">
            <SectionTitle
              title="Toggle Switches"
              subtitle="Interactive toggle switches with smooth animations"
              className="mb-8"
            />
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Sizes</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Toggle 
                        size="sm" 
                        checked={toggleStates.toggle1}
                        onCheckedChange={() => handleToggleChange('toggle1')}
                      />
                      <span className="text-sm">Small Toggle</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Toggle 
                        checked={toggleStates.toggle2}
                        onCheckedChange={() => handleToggleChange('toggle2')}
                      />
                      <span className="text-sm">Default Toggle</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Toggle 
                        size="lg" 
                        checked={toggleStates.toggle3}
                        onCheckedChange={() => handleToggleChange('toggle3')}
                      />
                      <span className="text-sm">Large Toggle</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Variants</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Toggle variant="default" checked={true} />
                      <span className="text-sm">Default</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Toggle variant="default" checked={true} />
                      <span className="text-sm">Outline</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">States</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Toggle disabled />
                      <span className="text-sm text-muted-foreground">Disabled</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Toggle disabled checked={true} />
                      <span className="text-sm text-muted-foreground">Disabled Checked</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Cards Section */}
          <section className="mb-20">
            <SectionTitle
              title="Cards"
              subtitle="Flexible card components with morphism effects"
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    A simple card with header and content sections.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is the card content area where you can place any content.
                  </p>
                </CardContent>
              </Card>

              <Card variant="filled">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>
                    An elevated card with enhanced shadow effects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Action Button</Button>
                </CardContent>
              </Card>

              <Card variant="outline">
                <CardHeader>
                  <CardTitle>Outline Card</CardTitle>
                  <CardDescription>
                    A card with outline styling and subtle effects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Cancel</Button>
                    <Button size="sm">Confirm</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Typography Section */}
          <section>
            <SectionTitle
              title="Typography"
              subtitle="Flexible title and text components with various styles"
              className="mb-8"
            />
            <Card className="p-8">
              <div className="space-y-8">
                <div>
                  <Title size="6xl" variant="gradient">Gradient Title</Title>
                  <Subtitle size="lg">Large subtitle with muted styling</Subtitle>
                </div>
                <div>
                  <Title size="4xl">Large Title</Title>
                  <Subtitle>Default subtitle text</Subtitle>
                </div>
                <div>
                  <Title size="2xl" variant="primary">Primary Title</Title>
                  <Subtitle size="sm">Small subtitle text</Subtitle>
                </div>
                <div>
                  <Title size="xl" variant="muted">Muted Title</Title>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    );
  }
);

Showcase.displayName = 'Showcase';

export { Showcase };